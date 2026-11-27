---
layout: default
title: FAQ
description: What Panelwright is, what it costs, the free trial, SketchUp versions, CNC export, and answers to everyday questions about cut lists, nesting, materials and hardware.
---

# FAQ

## Before you buy

**What is Panelwright?**
Panelwright is a SketchUp extension for cabinet and furniture shops. From one 3D model it produces the cut list, sheet nesting, CNC DXF files, costing, quotation, invoice, contract, stock and profit per project.

**Does it make a cut list from any SketchUp model?**
Yes. Every group or component that is a panel is listed with length, width, thickness, material, grain and edge banding. You can draw by hand or use the 28 built-in parametric cabinet types.

**Does it do sheet nesting and cutting diagrams?**
Yes. Parts are nested on your sheet sizes with kerf, edge margin and grain direction. Offcuts are stored and reused first, and each sheet layout can be printed or exported.

**Can I send the parts to a CNC?**
Panelwright exports DXF with true contours and System 32 drilling, plus drilling drawings in PDF. Your CAM software turns the DXF into machine code. Panelwright itself does not write G-code.

**Does it calculate the price and make a quotation?**
Yes. Material, edge banding, hardware, cutting and labour are priced from your own price list, with margin and tax. The same numbers go into a quotation, invoice and contract with your company header.

**How much does it cost?**
$29 per month, $290 per year, or $490 once for a perpetual licence with 12 months of updates. Team packs are $690 per year for 3 seats and $1,990 per year for 10 seats. Every plan includes every feature.

**Is there a free trial?**
Yes, 10 days with every feature and no credit card. Install the extension and the trial starts by itself. Your projects and prices stay after the trial.

**Which SketchUp versions does it need?**
SketchUp 2021 or newer, Pro or Studio, on Windows and macOS. SketchUp Free and Go on the web cannot load extensions.

**Which languages and units are supported?**
English, Español, Türkçe, Русский, 中文 and Монгол. Millimetres or fractional inches, A4 or Letter documents.

**How do I buy and activate it?**
Checkout is on the pricing page by card or PayPal. You then get your licence key at panelwright.app/activate using the Computer ID shown in the extension. One licence works on one computer at a time and can be moved.

**Can I get a refund?**
Yes. There is a 14-day money-back guarantee on any purchase.

**How is it different from OpenCutList?**
OpenCutList focuses on cut lists and cutting diagrams and has no purchase price. Panelwright adds cabinet generation, hardware, drilling, costing, client documents, stock and profit. The two can be installed together.

See also: [how Panelwright compares with other tools](/compare.html) and [pricing](/pricing.html).

## Using Panelwright

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

<script type="application/ld+json">
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "What is Panelwright?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Panelwright is a SketchUp extension for cabinet and furniture shops. From one 3D model it produces the cut list, sheet nesting, CNC DXF files, costing, quotation, invoice, contract, stock and profit per project."
   }
  },
  {
   "@type": "Question",
   "name": "Does it make a cut list from any SketchUp model?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Every group or component that is a panel is listed with length, width, thickness, material, grain and edge banding. You can draw by hand or use the 28 built-in parametric cabinet types."
   }
  },
  {
   "@type": "Question",
   "name": "Does it do sheet nesting and cutting diagrams?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Parts are nested on your sheet sizes with kerf, edge margin and grain direction. Offcuts are stored and reused first, and each sheet layout can be printed or exported."
   }
  },
  {
   "@type": "Question",
   "name": "Can I send the parts to a CNC?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Panelwright exports DXF with true contours and System 32 drilling, plus drilling drawings in PDF. Your CAM software turns the DXF into machine code. Panelwright itself does not write G-code."
   }
  },
  {
   "@type": "Question",
   "name": "Does it calculate the price and make a quotation?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Material, edge banding, hardware, cutting and labour are priced from your own price list, with margin and tax. The same numbers go into a quotation, invoice and contract with your company header."
   }
  },
  {
   "@type": "Question",
   "name": "How much does it cost?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "$29 per month, $290 per year, or $490 once for a perpetual licence with 12 months of updates. Team packs are $690 per year for 3 seats and $1,990 per year for 10 seats. Every plan includes every feature."
   }
  },
  {
   "@type": "Question",
   "name": "Is there a free trial?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, 10 days with every feature and no credit card. Install the extension and the trial starts by itself. Your projects and prices stay after the trial."
   }
  },
  {
   "@type": "Question",
   "name": "Which SketchUp versions does it need?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "SketchUp 2021 or newer, Pro or Studio, on Windows and macOS. SketchUp Free and Go on the web cannot load extensions."
   }
  },
  {
   "@type": "Question",
   "name": "Which languages and units are supported?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "English, Español, Türkçe, Русский, 中文 and Монгол. Millimetres or fractional inches, A4 or Letter documents."
   }
  },
  {
   "@type": "Question",
   "name": "How do I buy and activate it?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Checkout is on the pricing page by card or PayPal. You then get your licence key at panelwright.app/activate using the Computer ID shown in the extension. One licence works on one computer at a time and can be moved."
   }
  },
  {
   "@type": "Question",
   "name": "Can I get a refund?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. There is a 14-day money-back guarantee on any purchase."
   }
  },
  {
   "@type": "Question",
   "name": "How is it different from OpenCutList?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "OpenCutList focuses on cut lists and cutting diagrams and has no purchase price. Panelwright adds cabinet generation, hardware, drilling, costing, client documents, stock and profit. The two can be installed together."
   }
  }
 ]
}
</script>
