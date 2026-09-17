# Design

<!-- impeccable:design-schema 1 -->

## Surface

Long-form marketing landing (`public/index.html`) in **Persuade** mode, with a **Read** case study at `public/cases/antfarm-take-home/`. GitHub Pages static site.

## World

Editorial developer-tool on warm paper. Not a cybersecurity platform, not a dark SOC, not the previous night-checkpoint page.

Pinned by the 2026-09-17 brief: Linear/Vercel-level restraint, Geist + Geist Mono, official `logo.png`, real `/interview-repo-safety` report as proof.

## Type

- Geist variable (`public/assets/fonts/Geist-Variable.woff2`) — UI and display
- Geist Mono variable — commands, report fields, diagrams
- Display: weight ~550, tracking −0.04em, max ~4.35rem
- Body ~17px, measure ~68ch on the report page

Geist is brief-preferred even though it is a common face.

## Color

| Token | Value | Role |
|---|---|---|
| `--bg` | `#f4f2ec` | page |
| `--paper` | `#fffcf7` | report panels |
| `--ink` | `#161615` | text, primary buttons |
| `--muted` | `#58554c` | secondary text (warm, not cool gray) |
| `--line` | `#ddd8cc` | hairlines |
| `--mint` | `#0f9f56` | logo accent, focus ring, copy confirmation |

Primary CTAs are near-black. Mint is not used as a neon fill.

## Components

- Sticky header; on scroll, 92% paper + blur + hairline (brief-required, not decorative glass)
- Black filled button / ghost bordered button
- Copyable command chip
- Report panel: paper, mono dl, real Phase 1 fields
- Hairline steps, two-column explain/checks, centered mono diagrams
- Mobile: Menu toggle, paper sheet nav

## Motion

Header background transition. Copy button label → Copied. Respect `prefers-reduced-motion`. No section-wide identical reveals.

## Evidence

The Proof of Dev / Antfarm-style take-home report in `content/cases/antfarm-take-home.md` is the only case study. Do not invent tools, scores, or extra catches.
