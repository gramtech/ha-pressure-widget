# analog-barometer-card

A Home Assistant Lovelace custom card that displays barometric pressure as a
classic analog aneroid barometer — a dial with a needle, the familiar
Stormy / Rain / Change / Fair / Very Dry weather zones, and a pressure trend
indicator (rising / falling / steady) computed from your recorder history.

![Analog barometer card](screenshots/card-light.png)

In a Lovelace dashboard:

![Analog barometer card in a Lovelace dashboard](screenshots/card-dark.png)

## Features

- Analog dial rendered in SVG, styled like a classic household barometer
- Needle position maps your sensor's current pressure onto the dial
- Trend arrow (↑ Rising / ↓ Falling / → Steady) plus a small reference tick
  on the rim showing where the needle was a few hours ago — like the manual
  "set" pointer on a real barometer
- Trend is computed from Home Assistant's history API (not just what's been
  observed since the dashboard loaded), so it's correct immediately after a
  page reload
- Supports both hPa/mbar and inHg pressure sensors
- Visual card editor (no YAML required)

## Installation

### HACS (recommended)

1. In HACS, go to **Frontend** → the **⋮** menu → **Custom repositories**.
2. Add this repository URL with category **Lovelace**.
3. Install **Analog Barometer Card** and add the resource when prompted.

### Manual

1. Copy `dist/analog-barometer-card.js` from this repo into your Home Assistant
   `config/www/` directory.
2. In **Settings → Dashboards → Resources**, add a resource:
   - URL: `/local/analog-barometer-card.js`
   - Resource type: JavaScript Module

## Configuration

Add the card via the dashboard UI ("Add Card" → search for "Analog
Barometer") and use the visual editor, or configure it directly in YAML:

```yaml
type: custom:analog-barometer-card
entity: sensor.outdoor_pressure
name: Outdoor Pressure
unit: hPa
trend_hours: 3
trend_threshold: 1.5
needle_color: "#333333"
```

### Options

| Name              | Type   | Default                          | Description                                                        |
| ----------------- | ------ | --------------------------------- | -------------------------------------------------------------------- |
| `entity`          | string | **required**                      | A `sensor` entity reporting barometric pressure                    |
| `name`             | string | entity's friendly name            | Title shown above the dial                                         |
| `unit`             | string | auto-detected from the entity     | `hPa` or `inHg`                                                    |
| `min`              | number | 950 hPa / 28.0 inHg               | Lower bound of the dial scale                                      |
| `max`              | number | 1050 hPa / 31.0 inHg              | Upper bound of the dial scale                                      |
| `trend_hours`      | number | 3                                 | How many hours back to look up for computing the trend             |
| `trend_threshold`  | number | 1.5 hPa (auto-scaled for inHg)    | Minimum change over `trend_hours` to be considered rising/falling  |
| `needle_color`     | string | `#333`                            | CSS color for the needle                                           |

## Development

```bash
npm install
npm run build       # bundles src/ into dist/analog-barometer-card.js
npm run typecheck
npm run lint
```

`dev/harness.html` is a standalone browser test page (mocked `hass` object,
no real Home Assistant instance required) used to visually verify the card
while developing — see the comments in that file for how to run it.

## License

Apache-2.0 — see [LICENSE](LICENSE).
