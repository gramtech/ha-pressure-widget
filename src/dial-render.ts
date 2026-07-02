import { svg, SVGTemplateResult } from 'lit';
import { TICK_STEPS, ZONES_HPA } from './const';
import { describeArc, generateTicks, polarToCartesian, valueToAngle } from './dial-geometry';
import { PressureUnit } from './types';
import { convertFromHpa } from './unit-utils';

const CENTER = 100;
const ZONE_RADIUS = 86;
const ZONE_STROKE_WIDTH = 9;
const ZONE_LABEL_RADIUS = 78;
const TICK_OUTER_RADIUS = 72;
const MAJOR_TICK_LEN = 8;
const MINOR_TICK_LEN = 4;
const MAJOR_LABEL_RADIUS = 50;
const NEEDLE_LENGTH = 62;
const NEEDLE_TAIL = 14;
const TREND_MARKER_RADIUS = 95;
const TREND_MARKER_LEN = 7;

export interface DialParams {
  min: number;
  max: number;
  unit: PressureUnit;
  value: number | null;
  pastValue: number | null;
  needleColor: string;
}

function renderZoneArcs(min: number, max: number, unit: PressureUnit): SVGTemplateResult[] {
  return ZONES_HPA.map((zone) => {
    const from = convertFromHpa(zone.from, unit);
    const to = convertFromHpa(zone.to, unit);
    if (to <= min || from >= max) return svg``;
    const startAngle = valueToAngle(from, min, max);
    const endAngle = valueToAngle(to, min, max);
    if (endAngle <= startAngle) return svg``;
    const path = describeArc(CENTER, CENTER, ZONE_RADIUS, startAngle, endAngle);
    return svg`<path
      d=${path}
      stroke=${zone.color}
      stroke-width=${ZONE_STROKE_WIDTH}
      fill="none"
    />`;
  });
}

function renderZoneLabels(min: number, max: number, unit: PressureUnit): SVGTemplateResult[] {
  return ZONES_HPA.map((zone) => {
    const from = convertFromHpa(zone.from, unit);
    const to = convertFromHpa(zone.to, unit);
    const midValue = (Math.max(from, min) + Math.min(to, max)) / 2;
    if (midValue < min || midValue > max) return svg``;
    const angle = valueToAngle(midValue, min, max);
    const pos = polarToCartesian(CENTER, CENTER, ZONE_LABEL_RADIUS, angle);
    return svg`<text x=${pos.x} y=${pos.y} class="zone-label" text-anchor="middle" dominant-baseline="middle">${zone.label}</text>`;
  });
}

function renderTicks(min: number, max: number, unit: PressureUnit): SVGTemplateResult[] {
  const { major, minor } = TICK_STEPS[unit];
  const ticks = generateTicks(min, max, major, minor);
  return ticks.map((tick) => {
    const len = tick.major ? MAJOR_TICK_LEN : MINOR_TICK_LEN;
    const inner = polarToCartesian(CENTER, CENTER, TICK_OUTER_RADIUS - len, tick.angle);
    const outer = polarToCartesian(CENTER, CENTER, TICK_OUTER_RADIUS, tick.angle);
    const line = svg`<line
      x1=${inner.x} y1=${inner.y} x2=${outer.x} y2=${outer.y}
      class=${tick.major ? 'tick tick-major' : 'tick tick-minor'}
    />`;
    if (!tick.major) return line;
    const labelPos = polarToCartesian(CENTER, CENTER, MAJOR_LABEL_RADIUS, tick.angle);
    const label = svg`<text x=${labelPos.x} y=${labelPos.y} class="tick-label" text-anchor="middle" dominant-baseline="middle">${Math.round(
      tick.value * 10
    ) / 10}</text>`;
    return svg`${line}${label}`;
  });
}

function renderTrendMarker(
  pastValue: number | null,
  min: number,
  max: number
): SVGTemplateResult {
  if (pastValue === null) return svg``;
  const angle = valueToAngle(pastValue, min, max);
  const inner = polarToCartesian(CENTER, CENTER, TREND_MARKER_RADIUS - TREND_MARKER_LEN, angle);
  const outer = polarToCartesian(CENTER, CENTER, TREND_MARKER_RADIUS, angle);
  return svg`<line
    x1=${inner.x} y1=${inner.y} x2=${outer.x} y2=${outer.y}
    class="trend-marker"
  />`;
}

function renderNeedle(value: number | null, min: number, max: number, color: string): SVGTemplateResult {
  if (value === null) return svg``;
  const angle = valueToAngle(value, min, max);
  return svg`<g class="needle" transform="rotate(${angle} ${CENTER} ${CENTER})">
    <polygon
      points="${CENTER},${CENTER - NEEDLE_LENGTH} ${CENTER - 3},${CENTER + NEEDLE_TAIL} ${CENTER + 3},${
    CENTER + NEEDLE_TAIL
  }"
      fill=${color}
    />
  </g>`;
}

export function renderDial(params: DialParams): SVGTemplateResult {
  const { min, max, unit, value, pastValue, needleColor } = params;
  return svg`
    <svg viewBox="0 0 200 200" class="dial" role="img" aria-label="Barometer dial">
      <circle cx=${CENTER} cy=${CENTER} r="97" class="bezel" />
      <circle cx=${CENTER} cy=${CENTER} r="90" class="face" />
      ${renderZoneArcs(min, max, unit)}
      ${renderTicks(min, max, unit)}
      ${renderZoneLabels(min, max, unit)}
      ${renderTrendMarker(pastValue, min, max)}
      ${renderNeedle(value, min, max, needleColor)}
      <circle cx=${CENTER} cy=${CENTER} r="6" class="hub" />
    </svg>
  `;
}
