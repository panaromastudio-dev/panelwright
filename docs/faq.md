---
layout: default
title: FAQ
description: Answers to the questions shops ask most about cut lists, nesting, materials and hardware.
---

# FAQ

**A part in my model isn't in the cut list.**
Check that it is a group or component (loose faces are ignored), that its thickness is between the *Min* and *Max thickness* in Advanced settings (default 3–60 mm), and that its face area is above *Min area* (default 3000 mm² — anything smaller is treated as hardware). The **Skipped** list at the bottom of Results tells you exactly why each item was left out.

**A door is rotated in the nesting layout — grain will be wrong.**
Name the group so the plugin knows it's a front (*Door*, *Front*, *Drawer front*), or add `[G]` to the name. Fronts are never rotated.

**Materials show the wrong price / sheet size.**
The material name on the part must match a name in **Prices → Sheet materials**. Check spelling and thickness.

**Edge banding is higher than I expected.**
Part of it is the **allowance per banded side** (default 40 mm), which mirrors what an edge bander actually consumes. It's shown as its own line in the cost breakdown. Change it in Advanced settings if your machine differs.

**Cutting cost seems wrong.**
Cutting is charged **per sheet**, not per part. Check the *Cutting per sheet* price on each material.

**The PDF is in the wrong language / unit.**
Language: *Extensions → Panelwright → Language*. Units: *Advanced settings → Units*. Both apply to every new export.

**Can I use my own contract wording?**
Yes — *Project & client → Contract template*. Placeholders like `{% raw %}{{PROJECT}}{% endraw %}` and `{% raw %}{{AMOUNT}}{% endraw %}` are filled automatically.

**Does it work with OpenCutList / CutList Bridge?**
It does not conflict with them; you can have both installed. Panelwright covers cabinet generation, hardware, drilling, costing and documents in addition to the cut list.

**DXF opens with tiny geometry in my CAM software.**
The DXF is in millimetres. Set your CAM import unit to mm.

**Where are my settings and prices stored?**
In your root folder (*Project & client → Root folder*) as JSON files, plus a backup in SketchUp's preferences. **Backup** tab exports everything to a single file.

**I got an error.**
*Extensions → Panelwright → 🩺 Diagnostics* → **Send to support**. Include what you were doing when it happened.

**macOS: the extension won't enable.**
Open *Extension Manager*, find Panelwright, click *Enable*. If SketchUp's loading policy is set to *Identified Extensions Only*, the extension is signed and will load; if it's *Unrestricted*, everything loads.

