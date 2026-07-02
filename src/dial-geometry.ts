import { DIAL_START_ANGLE, DIAL_SWEEP_ANGLE } from './const';

export interface Point {
  x: number;
  y: number;
}

export interface Tick {
  value: number;
  angle: number;
  major: boolean;
}

/** Maps a value in [min, max] to an angle on the dial sweep, clamping out-of-range values. */
export function valueToAngle(value: number, min: number, max: number): number {
  if (max <= min) return DIAL_START_ANGLE;
  const clamped = Math.min(max, Math.max(min, value));
  const fraction = (clamped - min) / (max - min);
  return DIAL_START_ANGLE + fraction * DIAL_SWEEP_ANGLE;
}

/** Converts a polar coordinate (angle measured clockwise from 12 o'clock) to cartesian. */
export function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number): Point {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

/** Builds an SVG arc path `d` attribute between two angles (degrees) on a circle of radius r. */
export function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
}

/** Generates major/minor tick marks across [min, max]. */
export function generateTicks(
  min: number,
  max: number,
  majorStep: number,
  minorStep: number
): Tick[] {
  if (majorStep <= 0 || minorStep <= 0 || max <= min) return [];
  const ticks: Tick[] = [];
  const epsilon = minorStep / 1000;
  for (let v = min; v <= max + epsilon; v += minorStep) {
    const rounded = Math.round(v / minorStep) * minorStep;
    const isMajor = Math.abs(rounded / majorStep - Math.round(rounded / majorStep)) < epsilon;
    ticks.push({
      value: rounded,
      angle: valueToAngle(rounded, min, max),
      major: isMajor,
    });
  }
  return ticks;
}
