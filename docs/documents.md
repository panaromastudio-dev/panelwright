---
layout: default
title: Documents
description: Quotation, invoice, contract, assembly sheets, shop packet, labels and purchase orders.
---

# Documents

Every document uses the details from **Project & client** and your logo (PNG). All of them open in an editor first, so you can adjust lines before exporting.

## Quotation (PDF)

Header with your company, the customer, project name and code, date, **valid until** (a real date), PO number if set. Body in the breakdown style you choose (detailed / summary / by zone / by cabinet). Terms box: deposit %, lead time, warranty, validity, your note. Optional appendix with the full part list.

## Invoice

International layout: **FROM** (your company, reg. no, tax ID, bank, IBAN, SWIFT/BIC) and **BILL TO** (customer, tax ID, contact). Separate **Ship to** line when the delivery address differs. Invoice number, date, due date, **payment terms (Net N)**, PO number. Tax shown separately. Amount in words. Bank block and payment reference.

Three kinds: **full**, **deposit** (prepayment % from terms) and **balance**.

## Contract

Generated from a template with placeholders (`{% raw %}{{PROJECT}}{% endraw %}`, `{% raw %}{{AMOUNT}}{% endraw %}`, `{% raw %}{{DEPOSIT}}{% endraw %}`…). The template is editable in **Project & client → Contract template**.

In every language except Mongolian the **English** template is used. It ends with the note: *"This is a general template, not legal advice. Have a lawyer confirm that it complies with the laws of your country before you use it."* Please take that seriously — commercial law differs between countries.

## Assembly sheet

Per cabinet: part list with edge-banding marks, hardware, and up to five 3D views captured from your model.

## Variant comparison

Same design, different materials — side-by-side cost.

## Design-project quotation

For design work priced separately from manufacturing: measurement on site (per linear metre of wall), production drawings (per m² of front), renders (per view). Exported as its own PDF. Optionally includes a printable **measurement sheet** with a 5 mm grid, instructions for recording wall skew and curvature to the millimetre.

## E-mail drafts

If *Prepare e-mail draft* is on, each export also opens a draft in your e-mail program with the document attached and a short message.

## Paper size

**Advanced settings → PDF paper size:** A4 (Europe, Asia) or Letter (US, Canada). Affects every PDF.

## Where files go

Each project gets a folder structure under your root folder (**Project & client → Root folder**): contracts, SketchUp files, quotations, cut lists, DXF, photos, invoices, archive, design/renders. Exports land in the right subfolder automatically. A **MASTER** Excel file lists every registered project.

