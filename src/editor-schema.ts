export const SCHEMA = [
  { name: 'entity', selector: { entity: { domain: 'sensor' } } },
  { name: 'name', selector: { text: {} } },
  {
    name: 'unit',
    selector: {
      select: {
        mode: 'dropdown',
        options: [
          { value: 'auto', label: 'Auto-detect' },
          { value: 'hPa', label: 'hPa' },
          { value: 'inHg', label: 'inHg' },
        ],
      },
    },
  },
  { name: 'trend_hours', selector: { number: { min: 1, max: 12, step: 1, mode: 'box' } } },
  { name: 'trend_threshold', selector: { number: { min: 0, step: 0.1, mode: 'box' } } },
  {
    name: 'face_style',
    selector: {
      select: {
        mode: 'dropdown',
        options: [
          { value: 'classic', label: 'Classic' },
          { value: 'silver', label: 'Silver' },
          { value: 'dark', label: 'Dark' },
          { value: 'light', label: 'Light' },
          { value: 'led-backlit', label: 'LED Backlit' },
          { value: 'fluorescent', label: 'Fluorescent' },
          { value: 'futuristic', label: 'Futuristic' },
        ],
      },
    },
  },
  { name: 'needle_color', selector: { text: {} } },
] as const;

const LABELS: Record<string, string> = {
  entity: 'Pressure sensor entity',
  name: 'Name (optional)',
  unit: 'Display unit',
  trend_hours: 'Trend lookback (hours)',
  trend_threshold: 'Trend threshold',
  face_style: 'Face style',
  needle_color: 'Needle color (optional, overrides face style default)',
};

export function computeLabel(schema: { name: string }): string {
  return LABELS[schema.name] ?? schema.name;
}
