export interface HassEntity {
  entity_id: string;
  state: string;
  last_changed: string;
  last_updated: string;
  attributes: {
    friendly_name?: string;
    unit_of_measurement?: string;
    device_class?: string;
    [key: string]: unknown;
  };
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callApi<T>(method: 'GET' | 'POST', path: string): Promise<T>;
  language?: string;
}

export type PressureUnit = 'hPa' | 'inHg';

export interface PressureWidgetConfig {
  type: string;
  entity: string;
  name?: string;
  unit?: PressureUnit;
  min?: number;
  max?: number;
  trend_hours?: number;
  trend_threshold?: number;
  needle_color?: string;
}

export type TrendDirection = 'rising' | 'falling' | 'steady' | 'unknown';

export interface TrendResult {
  direction: TrendDirection;
  pastValue: number | null;
  fetchedAt: number;
}

export interface HistoryStatePoint {
  state?: string;
  s?: string;
  last_updated?: string;
  lu?: number;
}

/** Standard HA custom-card event dispatch helper. */
export function fireEvent(
  node: HTMLElement,
  type: string,
  detail: Record<string, unknown> = {},
  options: { bubbles?: boolean; cancelable?: boolean; composed?: boolean } = {}
): void {
  const event = new CustomEvent(type, {
    bubbles: options.bubbles ?? true,
    cancelable: options.cancelable ?? false,
    composed: options.composed ?? true,
    detail,
  });
  node.dispatchEvent(event);
}
