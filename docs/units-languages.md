---
layout: default
title: Units and languages
description: Millimetres or fractional inches, A4 or Letter, and the six interface languages.
---

# Units and languages

## Units

**Advanced settings → Units**

| Option | What you see |
|---|---|
| **Millimetres** | `720 × 560`, `16` |
| **Inches — fractional** | `28 3/8 × 22 1/16`, `5/8` |
| **Follow the model units** | Whatever SketchUp's model is set to |

**Fraction precision** (inches only): 1/8, 1/16, 1/32 or 1/64. Cabinetmaking normally uses 1/16.

### Typing values

Any length field accepts:

| You type | Understood as |
|---|---|
| `560` | 560 in the current unit |
| `22 1/16` or `22-1/16` | 22 1/16 in |
| `3/4"` or `0.75in` | 3/4 in (explicit) |
| `1' 10 1/2"` or `1ft 6in` | feet + inches |
| `1200mm`, `2.5cm`, `1.22m` | metric (explicit) |

Explicit units always win over the current mode, so `1200mm` is 1200 mm even in inch mode. Unrecognised text leaves the field unchanged.

### What stays metric

- **DXF files** are always in millimetres — that's what CNC and saw software expects.
- **Internal calculations** are always in millimetres. Switching units never changes a result, only how it is displayed.

### Sheet sizes

Presets in **Prices → Sheet materials → Format**:

| | |
|---|---|
| 2800 × 2070 mm | Russia, Mongolia, China |
| 2500 × 1250 mm | Europe |
| 2440 × 1220 mm | metric "8 × 4" |
| **8' × 4'** (2438.4 × 1219.2) | US, Canada — exact |
| 10' × 4', 8' × 5' | US |

Note that metric 2440 × 1220 is **not** exactly 96 × 48 inches (it's 96 1/16). Choose the one you actually buy.

## Languages

**Extensions → Panelwright → Language**

English · Español · Türkçe · Русский · 中文 · Монгол

The whole interface, all PDFs, Excel, CSV and DXF labels follow the language. Anything you type yourself (company name, material names, notes) stays exactly as you typed it.

Contract and e-mail templates: English is used for every language except Mongolian.

**Chinese PDFs** are produced in English, because the embedded PDF font has no CJK glyphs. The interface itself is fully Chinese.

### Adding or fixing a translation

*Extensions → Panelwright → Language → Export translation file* writes a JSON file you can edit. Put it back in the plugin's folder and it overrides the built-in text. Send it to us and we'll include it in the next release.

