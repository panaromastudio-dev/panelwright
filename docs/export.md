---
layout: default
title: Export & CNC
description: Excel, CSV, DXF per sheet and per part, drilling drawings and barcode labels.
---

# Export & CNC

## Excel

One workbook, several sheets: project info, zones, prices, **cut list**, hardware, sheet map, summary. Cells contain **live formulas** — change a quantity and totals update. Column headers follow your unit (mm or in, m² or ft²); the area formula adjusts to match.

The cut list includes the edge-banding code (`L1+W1`) and the visual mark (`■·■·`).

## CSV

Semicolon-separated, UTF-8 with BOM (opens correctly in Excel on any locale). Cut list first, then hardware. Numeric columns in your unit.

## DXF

**Advanced settings → DXF mode:**

- **Per sheet** — one file per sheet, every part as a closed polyline at its nested position. Optional sheet outline on layer `SHEET`, optional text labels on layer `TEXT`.
- **Per part** — one file per distinct part, a single closed contour at the origin. This is what most CNC and beam-saw software wants for "custom shape" import.

Format is AutoCAD R12, **millimetres always** (CAM software expects it), closed contours. Labels and file names follow the interface language: `Shelf_564x500.dxf`.

## Drilling (System 32)

**Shop floor → Drilling drawings** produces a PDF per part and a DXF per part with:

- Hinge cups Ø35 × 13 at 22.5 mm from the edge, screw holes on the 45 / 9.5 pattern
- Shelf-pin rows Ø5 × 10 on a **32 mm pitch, 37 mm from the front and back edges**
- Confirmat through-holes Ø7 for top/bottom panels

Hole positions, diameters and depths come from the hinge/slide you picked in the catalogue and are all adjustable in *Shop floor → Drilling settings*.

## Place layout in model

Draws the nested sheets in your SketchUp model next to the furniture — handy for checking or for presenting to a client. Lines only by default (fast); each sheet is one group.

## Part labels

**Shop floor → Part labels (PDF)** prints a label sheet — 10 labels per page, A4 or Letter — with, for each part:

- part number and project code
- part name and quantity
- **size in large type** (`720 × 560 × 16 mm`, or `28 3/8 × 22 1/16 × 5/8 in`)
- material and edge-banding code (`L1+W1`)
- a **Code 128 barcode** of `PROJECTCODE-PARTNO`

Every handheld shop scanner reads Code 128, so a panel can be scanned at the edge bander or the assembly bench.

**Part labels — one per piece** prints a separate label for every physical panel (`3-1`, `3-2`, …) instead of one per row. Use it when parts are cut in batches and need individual tracking.

## Marks in the model

**Bake marks** writes the part number onto each panel in 3D; **Remove marks** takes them off. **Highlight edges** paints the banded sides.

