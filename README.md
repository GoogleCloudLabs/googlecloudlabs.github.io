# Google Cloud Labs — Public R&D Arcade

Static Astro showcase site (`[GoogleCloudLabs/googlecloudlabs.github.io](https://github.com/GoogleCloudLabs/googlecloudlabs.github.io)`) for [Google Cloud Labs](https://github.com/GoogleCloudLabs): an interactive front door for open-source agent experiments, multi-model evaluation rigs, podcasts, and technical field notes.

## Highlights

- **Four Showcase Zones**:
  - `/` — Hero canvas, featured experiments bento grid, 1-click podcast deck, and latest field notes.
  - `/experiments` — Open-source agent harnesses, multi-model policing rigs, and an interactive in-browser policing simulator island.
  - `/vids` — Podcast & video episodes with continuous playback across navigation.
  - `/trends` — Opinionated technical field notes, behavioral benchmarks, and CSS-variable-themed vector architecture diagrams (`--pele-*` tokens, zero raw ASCII/Mermaid blocks).
- **Persistent Audio Deck (`ClientRouter` + `transition:persist`)**: Audio playback and waveform telemetry continue uninterrupted across route transitions.
- **Three Candidate Theme Directions**: Defaults to **01 Neon Arcade** (`data-theme="arcade"`), with live theme comparison (`?theme=arcade | blueprint | kinetic`) across **Neon Arcade** (dark lab telemetry), **Classified Blueprint** (cobalt drafting sheet), and **Kinetic Studio** (warm editorial R&D zine).
- **Zero Cookies, Zero User Data, Zero Analytics**: Compiles to pure static HTML, CSS, SVG, and minimal client islands with zero external font/tracker requests.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Static output in ./dist
npm run preview
```

## GitHub Pages & Custom Domain Configuration

GitHub Pages serves this organization-root repository out of the box at `https://googlecloudlabs.github.io/` (`base: '/'`, `site: 'https://googlecloudlabs.github.io'`).

Once the custom `.dev` apex domain (`devrel-labs.dev`) is registered and configured in DNS, add a single-line `public/CNAME` file containing `devrel-labs.dev`. GitHub Pages automatically updates `SITE_URL` and `301`-redirects `https://googlecloudlabs.github.io/*` to `https://devrel-labs.dev/*`.

## Disclaimer

This is not an officially supported Google product. This project is not
eligible for the [Google Open Source Software Vulnerability Rewards
Program](https://bughunters.google.com/open-source-security).

This project is intended for demonstration purposes only. It is not
intended for use in a production environment.
