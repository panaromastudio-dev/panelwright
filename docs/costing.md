---
layout: default
title: Costing
description: Sheet prices, edge banding, hardware, labour and machine rates — where every number in a quote comes from.
---

# Costing

All prices live in the **Prices** tab. Set them once; every calculation and document uses them.

## How the cost is built

```
Sheet material     = sheets used × price per sheet          (per material)
Cutting            = sheets used × cutting price per sheet  (per material)
Edge banding       = banded length (m) × price per metre    (per material)
Hardware           = pieces × unit price
Glass              = m² × price per m²
Labour             = assembly hours × rate  +  assembly units × rate  +  fixed
Transport          = fixed amount
─────────────────────────────────────────────
Subtotal
+ Waste reserve %   (optional, on materials)
+ Margin %
= Price before tax
+ VAT / GST / sales tax %
= Total
```

## Sheet materials

Each material has a **name**, **thickness**, one or more **sheet formats** (e.g. 2800 × 2070, 2440 × 1220 or 96" × 48"), a **price per sheet**, a **cutting price per sheet** and an **edge-banding price per metre**.

The name must match the material name used in your model (or chosen in Create furniture). Unknown materials fall back to *Other panel*.

**Why per sheet and not per m²?** Because that is how you buy it and how waste actually behaves. The m² rate shown in reports is derived for reference only.

### Grain

Tick **Grain** on a material (veneer, woodgrain laminate, postform worktop) and parts on that material are never rotated 90° in the nesting, so the grain never runs across a door or a side. Sheet usage rises slightly — that is the price of getting the grain right.

## Edge banding

The plugin decides which edges get banding automatically: edges that touch another panel are skipped, edges facing the floor are skipped (optional), fronts get all four. You can override per part.

Length charged = banded edge length + **allowance per banded side** (default 40 mm — the run-in/run-out the edge bander consumes). The allowance is shown separately in the cost breakdown so nothing is hidden.

Codes: **L1 / L2** are the long edges, **W1 / W2** the short ones. A part marked `L1+W1` is banded on one long and one short edge.

## Hardware

Counted from the model by name and size. Prices per piece from *Prices → Hardware*. Glass doors and shelves are priced per m² here too.

## Labour

Two ways, use either or both:

- **Assembly hours × hourly rate**
- **Assembly units × rate per hour or day** (e.g. 3 days × daily rate)

Plus **Transport / delivery** as a fixed amount.

## Tax

Set the tax label (*VAT*, *GST*, *Sales tax*, *IVA*…) and the rate. Choose whether quotations show prices with or without tax; invoices always show tax separately.

## Breakdown styles

When exporting a quotation you choose how much detail the client sees:

| Style | Client sees |
|---|---|
| **Detailed** | Every panel, every hinge, every metre of banding |
| **Summary** | Materials / hardware / labour / transport totals |
| **By zone** | One line per room (Kitchen, Wardrobe…) |
| **By cabinet** | One bundled price per cabinet — nothing left out |
| **Design project** | Measurement, production drawings, renders — a separate PDF |

## Profit tab

After the job: enter what you actually spent and received. The **Profit** tab compares plan vs actual per project so your next quote is better than the last.

