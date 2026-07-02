import { HISTORY_FETCH_THROTTLE_MS, TREND_STORAGE_PREFIX } from './const';
import { HistoryStatePoint, HomeAssistant, PressureUnit, TrendDirection } from './types';
import { convert } from './unit-utils';

export interface TrendCacheEntry {
  direction: TrendDirection;
  pastValueDisplay: number | null;
  fetchedAt: number;
}

/** Fetches the entity's raw state value from ~hoursAgo, in the entity's native unit. */
export async function fetchPastValue(
  hass: HomeAssistant,
  entityId: string,
  hoursAgo: number
): Promise<number | null> {
  const start = new Date(Date.now() - hoursAgo * 3600_000);
  const path = `history/period/${start.toISOString()}?filter_entity_id=${encodeURIComponent(
    entityId
  )}&minimal_response&no_attributes`;
  const result = await hass.callApi<HistoryStatePoint[][]>('GET', path);
  const series = result?.[0];
  if (!series?.length) return null;
  const point = series[0];
  const raw = point.state ?? point.s;
  if (raw === undefined) return null;
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : null;
}

export function classifyTrend(
  currentDisplay: number,
  pastDisplay: number,
  thresholdDisplay: number
): TrendDirection {
  const delta = currentDisplay - pastDisplay;
  if (Math.abs(delta) < thresholdDisplay) return 'steady';
  return delta > 0 ? 'rising' : 'falling';
}

function storageKey(entityId: string): string {
  return `${TREND_STORAGE_PREFIX}${entityId}`;
}

function loadCached(entityId: string): TrendCacheEntry | null {
  try {
    const raw = localStorage.getItem(storageKey(entityId));
    if (!raw) return null;
    return JSON.parse(raw) as TrendCacheEntry;
  } catch {
    return null;
  }
}

function saveCached(entityId: string, entry: TrendCacheEntry): void {
  try {
    localStorage.setItem(storageKey(entityId), JSON.stringify(entry));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — non-fatal.
  }
}

/**
 * Tracks pressure trend for one card instance: throttles history API calls,
 * dedupes concurrent fetches, and persists the last result across reloads.
 */
export class TrendTracker {
  private cache: TrendCacheEntry | null = null;
  private cachedEntityId: string | null = null;
  private inFlight: Promise<TrendCacheEntry> | null = null;

  getCached(entityId: string): TrendCacheEntry | null {
    if (this.cachedEntityId !== entityId) {
      this.cachedEntityId = entityId;
      this.cache = loadCached(entityId);
    }
    return this.cache;
  }

  private shouldFetch(entityId: string): boolean {
    const cached = this.getCached(entityId);
    if (!cached) return true;
    return Date.now() - cached.fetchedAt > HISTORY_FETCH_THROTTLE_MS;
  }

  /**
   * Returns the current trend, using the cache if fresh; otherwise triggers
   * (and dedupes) a background fetch and returns the stale cache in the
   * meantime so the UI never blocks on network.
   */
  update(
    hass: HomeAssistant,
    entityId: string,
    currentValueDisplay: number,
    nativeUnit: PressureUnit,
    displayUnit: PressureUnit,
    hoursAgo: number,
    thresholdDisplay: number,
    onResolved?: (entry: TrendCacheEntry) => void
  ): TrendCacheEntry | null {
    const cached = this.getCached(entityId);
    if (this.inFlight || !this.shouldFetch(entityId)) {
      return cached;
    }

    this.inFlight = fetchPastValue(hass, entityId, hoursAgo)
      .then((pastRaw): TrendCacheEntry => {
        if (pastRaw === null) {
          return { direction: 'unknown', pastValueDisplay: null, fetchedAt: Date.now() };
        }
        const pastDisplay = convert(pastRaw, nativeUnit, displayUnit);
        return {
          direction: classifyTrend(currentValueDisplay, pastDisplay, thresholdDisplay),
          pastValueDisplay: pastDisplay,
          fetchedAt: Date.now(),
        };
      })
      .catch((): TrendCacheEntry => ({
        direction: cached?.direction ?? 'unknown',
        pastValueDisplay: cached?.pastValueDisplay ?? null,
        fetchedAt: Date.now(),
      }))
      .then((entry) => {
        this.cache = entry;
        saveCached(entityId, entry);
        this.inFlight = null;
        onResolved?.(entry);
        return entry;
      });

    return cached;
  }
}
