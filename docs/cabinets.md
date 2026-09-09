---
layout: default
title: Creating cabinets
description: How the parametric cabinet generator builds base, wall, tall, corner and island units.
---

# Creating cabinets

The **Create furniture** tab builds cabinets parametrically. Every part it creates is a named group with the right material, so the cut list, edge banding, hardware and drilling are correct without any manual tagging.

## Cabinet types

| Type | Typical use | Options |
|---|---|---|
| **Base cabinet** | Kitchen base, vanity | Width, height, depth, doors (1/2), shelves, plinth height, back panel |
| **Drawer base** | Drawer bank | Number of drawers, front heights, slide type from catalogue |
| **Sink base** | Under sink | Cut-out for sink, false front |
| **Wall cabinet** | Upper kitchen | Doors, shelves, glass door option |
| **Tall cabinet** | Pantry, oven housing, wardrobe | Shelves, internal drawers, hanging rail |
| **Corner** | Blind or L corner | Carousel option |

All dimensions are in the current unit (mm or inches).

## Doors

- **Solid** — one panel, edge-banded on four sides.
- **Glass, full** — 4 mm glass, priced per m² from *Prices → Hardware*.
- **Glass in MDF frame** — 70 mm rails and stiles + glass.
- **Glass in aluminium frame** — 21 × 21 profile mitred at 45°, priced as **one** m² line under *Hardware → Glass door (aluminium frame)*. The frame is displayed in 3D but not listed as separate parts.

## Hardware from the catalogue

Choose hinges and slides from **Hardware → Catalogue**. The catalogue contains real dimensions and drilling data:

- **Hinges:** generic 35 mm, Blum CLIP top / BLUMOTION, Hettich Sensys, Häfele Metalla 510, Grass Tiomos, Salice Silentia+. All use the 35 mm cup, 37 mm plate setback and 32 mm pitch (System 32).
- **Slides:** ball-bearing 45 / 35 mm, roller, Blum TANDEM, LEGRABOX, MERIVOBOX, Hettich AvanTech YOU, Häfele Moovit MX, Grass Dynapro.

Drawer box widths are derived from the slide's side clearance automatically.

## Kitchen runs from a plan

**Create furniture → Kitchen plan** lets you lay out a whole run:

1. Enter wall lengths (straight, L or U shape).
2. Add cabinets left to right with their widths; the plugin fills fillers automatically.
3. Choose plinth (continuous, up to 2400 mm per piece), Gola profile, splashback and a single-slab worktop with standard hob (560 × 490) and sink (780 × 480) cut-outs.
4. **Create in 3D model** builds the full run aligned to the back wall, with a low 360 mm unit and hood above the hob.

## Editing after creation

The generated groups are ordinary SketchUp geometry — resize, move or delete freely. The cabinet remembers its parameters, so you can re-open it in the Create furniture tab, change a value and regenerate.

## Undo

Every *Create in 3D model* is one Undo step.

