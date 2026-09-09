---
layout: default
title: Privacy policy
description: What Panelwright stores, what it sends and what it never sends.
---

# Privacy policy

> **БӨГЛӨХ 3 ЗҮЙЛ** — бусад бүх зүйл бэлэн:
> `Panorama Studio LLC` → гэрээнд бичигддэг албан ёсны нэр · `REG-NO` → улсын бүртгэлийн дугаар · `ADDRESS` → албан ёсны хаяг · `2026-09-__` → нийтлэх өдөр

> **DRAFT — replace bracketed items and have it reviewed before publishing.** Written to satisfy GDPR (EU), UK GDPR and general good practice. It is accurate to how the Software actually works as of v5.8.0; if the Software changes, this policy must change with it.

**Last updated:** 2026-09-__
**Controller:** Panorama Studio LLC, ADDRESS, Ulaanbaatar, Mongolia, Mongolia · **support@panelwright.app**

## The short version

Panelwright runs entirely on your computer. **We do not operate an analytics or telemetry server.** The only data that leaves your computer is (1) a machine identifier when you activate a license, if activation is done through us, and (2) whatever you choose to e-mail us.

## 1. What the Software processes on your computer

The Software reads your SketchUp model to produce cut lists, nesting layouts, costs and documents. It stores, **locally on your computer**:

- Your settings (sheet size, units, language, prices you enter)
- Project, company and customer details **you type in** (names, addresses, bank details, tax IDs) — used only to fill the documents you generate
- Your project archive and the documents you export (PDF, Excel, DXF)
- A diagnostics log (`diag.log`, ~200 KB, self-rotating) containing timestamps, error messages, stack traces, calculation timings and numeric settings

None of this is transmitted to us automatically.

## 2. License activation

To activate a license the Software computes a **machine identifier** derived from hardware and operating-system properties of your computer. This identifier is used to bind your license key to your computer and to prevent one key from being used on more computers than purchased.

- The identifier is a one-way hash; it does not contain your name, files or model contents.
- **If you purchase through Trimble Extension Warehouse**, Trimble processes your payment and account data under [Trimble's privacy notice](https://sketchup.trimble.com/en/legal/privacy-notice). We receive from Trimble only what is needed to issue and support your license.
- **If you purchase directly from us**, you send us the machine identifier (shown in the License window) by e-mail or through our order form, and we return a license key. We keep the identifier, your e-mail address and order details for the lifetime of the license plus **three years** for accounting and to re-issue keys.

Legal basis: performance of the contract (Art. 6(1)(b) GDPR).

## 3. Diagnostics and support

When something goes wrong the Software offers a **Diagnostics** window. Its contents are built from the local log and include: Software version, SketchUp version, operating system, Ruby version, interface language, units, numeric settings, recent log lines and the last error with its stack trace.

**It deliberately excludes** your company name, customer names, project names, addresses, prices and model contents.

Nothing is sent unless **you** press *Copy*, *Save to file* or *Send to support*. *Send to support* opens a draft in your own e-mail program; you decide whether to send it. If you send it, we keep the message for as long as needed to resolve the issue and for **12 months** afterwards.

Legal basis: our legitimate interest in supporting the product (Art. 6(1)(f) GDPR), and your consent by sending.

## 4. Update check

Once per day, and when you choose *Check for updates*, the Software requests a small text file from **GitHub** (`raw.githubusercontent.com`) to learn the latest version number. GitHub sees your IP address and a standard user-agent, as with any web request; GitHub's privacy statement applies. We do not receive this request. You can disable automatic checking in the settings.

## 5. What we do NOT do

- No analytics, no usage tracking, no crash reporting to a server
- No advertising, no selling or sharing of data with third parties for marketing
- No access to your SketchUp models, files or documents
- No processing of payment card data (handled by Trimble or our payment provider)

## 6. Your rights

If you are in the EU/EEA, UK or another jurisdiction with data-protection rights, you may ask us to access, correct, delete or export the personal data we hold about you (in practice: your e-mail, order details and machine identifier). Write to **support@panelwright.app**. You may also complain to your local supervisory authority.

Deleting your machine identifier from our records will prevent us from re-issuing your license key.

## 7. Children

The Software is a professional tool and is not directed at children under 16.

## 8. Changes

We will post changes to this policy at **https://panelwright.app** and update the date above. Material changes will be mentioned in the Software's release notes.

## 9. Contact

**Panorama Studio LLC** · ADDRESS, Ulaanbaatar, Mongolia · **support@panelwright.app**
