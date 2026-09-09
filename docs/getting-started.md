---
layout: default
title: Getting started
description: Install Panelwright, run your first calculation and get a cut list out of a SketchUp model.
---

# Getting started

## Install

1. Download `Panelwright.rbz`.
2. In SketchUp: **Extensions → Extension Manager → Install Extension**, choose the file.
3. A new menu appears: **Extensions → Panelwright**.

**macOS:** if SketchUp says the extension is from an unidentified developer, open *Extension Manager*, click the extension and choose *Enable*. The extension is digitally signed by Trimble.

## Activate

**Extensions → Panelwright → 🔑 License / Activate.**

- **Trial:** click *Start trial* — 10 days, all features.
- **Licensed:** paste your key and click *Activate*. The key is bound to this computer. To move it to another computer, deactivate here first, then activate there.

## Choose your language and units

**Extensions → Panelwright → Language** — English, Español, Türkçe, Русский, 中文, Монгол.

Units are in the main window: **Advanced settings → Units** — *Millimetres*, *Inches — fractional*, or *Follow the model units*. Internally everything is calculated in millimetres; the unit only changes what you see and type.

## The main window

**Extensions → Panelwright → Cut list, Nesting, Cost** opens a window with tabs on the left:

| Tab | What it's for |
|---|---|
| **Results** | Calculate, cut list, sheet layouts, cost breakdown. Start here. |
| **Create furniture** | Parametric cabinets and full kitchen runs. |
| **Project & client** | Your company, the customer, project code, terms. Fills every document. |
| **Prices** | Sheet materials (per sheet), cutting, edge banding, hardware, labour, transport, margin, tax. |
| **Hardware** | Everything counted from the model, plus the catalogue. |
| **Stock / Inventory** | Panels and hardware on hand, minimum levels, offcuts. |
| **Profit** | Planned vs actual per project. |
| **Backup** | Export / import all settings and prices. |
| **Help** | Built-in guide. |

The top bar has **Calculate** and the export buttons. **Advanced settings** (top-right) holds kerf, margins, edge-banding rules, numbering, DXF options, units and paper size.

## Your first calculation

1. **Project & client** → enter your company name, then **Save**. This name goes on every PDF.
2. **Create furniture** → *Base cabinet* → width 600, height 720, depth 560, 1 door, 1 shelf → **Create in 3D model**.
3. Repeat for a *Wall cabinet* 800 and a *Drawer base* 500 with 3 drawers.
4. **Results** → **Calculate**.

You now have a cut list (click any row to see the part in 3D), sheet layouts with utilisation %, a hardware list and a full cost.

5. Click **Quotation (PDF)**. The editor shows every line; adjust if you like, choose the breakdown style, then **Export**.

## Modelling your own furniture

The extension counts **groups and components** as parts. Rules that make it work well:

- Each panel is its own group or component. Panels 3–60 mm thick are treated as sheet parts; anything smaller is treated as hardware.
- Name matters: a group called *Door*, *Дверца* or *Хаалга* is treated as a front (edge-banded on all four sides, not rotatable in nesting). Names containing *hinge*, *slide*, *handle* are hardware.
- Put each cabinet in its own outer group. The outer group's name becomes the cabinet name in the per-cabinet cost breakdown.
- Zones: name the outermost group *Kitchen*, *Wardrobe* etc., or add `[Z:Kitchen]` to any group name, to get per-room totals.
- Material names should match the names in **Prices → Sheet materials** — that's how each panel gets its price and sheet size.

See [Creating cabinets](cabinets.html) for the parametric generator and [FAQ](faq.html) for "why isn't this part counted?".

