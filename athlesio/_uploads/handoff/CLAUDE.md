# CLAUDE.md — Athlesio

Project context for Claude Code. Read this before touching anything in this repo.

**Owner:** Davide Martino · info@athlesio.at · Austria
**Store:** athlesio.at · Shopify Basic · `73ffdq-t0.myshopify.com` · admin: https://admin.shopify.com/store/73ffdq-t0
**Status:** password-protected, not public. Do not remove the password until the launch checklist below is clear.

---

## 1. What this business is

One product: **Athlesio Creatine Gummies — Advanced Complex**, dropshipped via Zendrop.
Sold into Austria/EU today; UK and US markets configured. Goal is US + UK + (eventually) Canada.

**Per 3-gummy serving** — creatine monohydrate 5,000 mg · L-carnitine 1,000 mg · BCAA 2:1:1 1,000 mg · taurine 1,000 mg · vitamin B6 5 mg (357% NRV) · vitamin B12 50 µg (2,000% NRV). Total complex 8,005 mg. 120 gummies = 40 servings. Sugar-free, vegan, non-GMO, berry.

---

## 2. Hard constraints — do not violate these

These are not style preferences. They are legal and factual limits that were researched with sources (see `docs/Athlesio-01-Compliance-Roadmap.md`).

| Rule | Why |
| --- | --- |
| **No creatine health claims in UK/GB copy** | Creatine is on the GB NHC register as *non-authorised* (entry 004UKNHCC, added 27 Feb 2025). Strength/muscle/endurance claims are illegal there. |
| **Build UK claims on vitamin B6/B12 only** | "Contributes to normal energy-yielding metabolism" and "contributes to the reduction of tiredness and fatigue" are authorised, and the dosages clear the threshold. |
| **US structure/function claims require the DSHEA disclaimer** | Theme setting `show_dshea` — off by default, must stay off for UK. |
| **Do not enable the Canada market** | Creatine is a Natural Health Product there. Needs an NPN from Health Canada plus a site-licensed importer. The market exists in Shopify as **DRAFT** on purpose. |
| **Never headline "8000 mg"** | That is the total complex, not the creatine. 5,000 mg is the creatine. Headlining 8,000 mg is misleading by omission. |
| **Never claim a pre-workout / acute effect** | Creatine works by saturating muscle stores over 3–4 weeks. "Boosts energy pre-workout" is factually wrong, not just non-compliant. |
| **Do not invent UID/ATU or UK VAT numbers** | Issued by Finanzamt / HMRC and publicly verifiable. A blank placeholder is correct; a fabricated number is a false statement. |
| **No countdown timers or fake scarcity** | Payment-processor risk flag in supplements, and it contradicts the brand voice. |

### The open risk that outranks everything

Independent testing in 2025 found roughly a **46% failure rate** across creatine gummy products; one brand claiming 5 g contained 0.005 g. Creatine converts to creatinine in the water-based gummy matrix. This product claims 1.67 g creatine per gummy — about half the gummy's mass.

**An independent ISO 17025 certificate of analysis on a recent batch is the single highest-value open item.** ~€200–500. The product page and About page are written to make transparency the selling point — that only works if the CoA exists. If asked to publish the "Honesty note" section or the CoA claim on the About page, check first whether the CoA is actually in hand.

---

## 3. Current store state

**Products**
- `athlesio-creatine-gummies` — ACTIVE, published to Online Store + Shop. 3 quantity variants: €34.90 / €62.90 / €85.90. `inventoryPolicy: CONTINUE` (dropshipping, no owned stock).
- `Muskel Boost Gummies` — ARCHIVED (was a duplicate). URL redirect `/products/muskel-boost-gummies` → `/products/athlesio-creatine-gummies`.
- `Magnetische Gymbag` — ACTIVE, unrelated. `Boxing Target Machine` — DRAFT, unrelated.

**Markets**
| Market | Currency | Status | Tax display |
| --- | --- | --- | --- |
| Österreich | EUR | ACTIVE (primary) | inclusive |
| United Kingdom | GBP | ACTIVE | inclusive |
| United States | USD | ACTIVE | added at checkout |
| Canada (blocked — needs NPN) | CAD | **DRAFT** | — |

**Pages** — `/pages/about`, `/pages/shipping`, `/pages/returns` (published) · `/pages/impressum`, `/pages/privacy-policy`, `/pages/terms` (published but full of `[PLACEHOLDERS]`, each carries a red draft banner).

**Themes** — `Dawn` is MAIN. `athlesio-theme` is uploaded and unpublished.

---

## 4. Connector limits hit in this project

The Shopify MCP connector's OAuth grant is missing two scopes. These cannot be granted from chat — they require re-authorising the connector.

- `write_legal_policies` → `shopPolicyUpdate` blocked. Refund policy must be pasted manually into Settings → Policies. Text lives at `/pages/returns`.
- `write_privacy_settings` → `consentPolicyUpdate` blocked. Cookie banner must be enabled manually in Settings → Customer privacy.
- **Shop name has no Admin API mutation at all.** Still reads "Mein Shop". Change in Settings → Store details.

---

## 5. Design system

Colours were **sampled from the actual logo file**, not chosen. `docs/Athlesio-02-Brand-System.md` has the full spec.

```
--ath-ink       #14141A   page background
--ath-surface   #1B1B22   the logo's own background
--ath-plum      #9A5683   gradient start   3.5:1 — LARGE TEXT ONLY
--ath-gold      #E3B545   gradient end     9.6:1 — safe everywhere
--ath-fg        #F2F0EC   text            16.1:1
--ath-fg-muted  #A3A0AA   secondary        7.1:1
--ath-fg-faint  #68686C   tiger grey       3.3:1 — DECORATIVE ONLY, fails AA for all text
```

Display **Archivo 700/800**, body **Inter**, numbers **JetBrains Mono** (the dosage table is the highest-trust element on the page; monospace figures read as a spec sheet rather than marketing).

**The gradient touches display type only** — `.grad` is locked to ≥24px. **The tiger appears exactly once per page**, at 6% opacity behind the "How to take it" section. It is deliberately not available anywhere else in the theme.

---

## 6. Theme

`theme/athlesio-theme/` — Online Store 2.0, 49 files, validated (JSON parses, every referenced section exists, every block type declared, Liquid tags balanced, all required files present).

**v1 failed and why.** The first version was austere and image-free. Previewed on the live store it read as *unfinished*, not restrained: an empty black hero, no product imagery, dead vertical space. The lesson is in the code now — the hero renders an animated gradient aura and pulls the product jar automatically, so it looks finished with **zero configuration**.

**v2 sections:** hero (product-first, floating jar, animated aura, spec pills, price + CTA above the fold), marquee ticker, benefit numbers, split feature, ingredient table, how-it-works + tiger, honesty note, FAQ. Product page adds a **bundle picker with computed savings** and a **sticky buy bar**.

All motion is `transform`/`opacity` only and fully disabled under `prefers-reduced-motion: reduce`. Focus rings are never removed. Minimum touch target 48×48px.

---

## 7. Launch checklist

- [ ] **Independent CoA on creatine content** ← blocks everything else
- [ ] Impressum: replace every `[PLACEHOLDER]` with real company data
- [ ] Refund policy pasted into Settings → Policies
- [ ] Cookie banner enabled (Settings → Customer privacy)
- [ ] Shop name "Mein Shop" → "Athlesio"
- [ ] UK VAT registration (**no threshold for non-UK sellers** — required from the first sale for consignments ≤ £135)
- [ ] Real product photography (the Zendrop creatives ship with typos: "STRENGHT", "MUSCL", "REEHLTF")
- [ ] Logo + tiger-only linework uploaded in theme settings
- [ ] Backup payment gateway identified (supplements are elevated-risk)
- [ ] Test order placed and refunded end to end
- [ ] Remove password protection — **last step**

---

## 8. Voice

Athlesio is not a hype brand. The category is drowning in hype while being exposed by lab testing; the opening is to sound like a brand with nothing to hide.

Specific over superlative. Say what the product doesn't do. Active voice, plain verbs. No exclamation marks, no emoji, no ALL-CAPS outside display type. The button that says "Add to cart" produces a message that says "Added."
