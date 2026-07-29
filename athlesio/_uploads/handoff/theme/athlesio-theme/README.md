# Athlesio — Shopify Theme

Online Store 2.0 theme, built from the Athlesio logo. Colours sampled directly
from `Athlesio Logo.png`: background `#1B1B22`, tiger grey `#68686C`, wordmark
gradient `#9A5683 → #E3B545`.

## Install

1. Shopify Admin → **Online Store → Themes**
2. **Add theme → Upload zip file** → select `athlesio-theme.zip`
3. **Customize** to set the logo, hero image and tiger watermark
4. **Actions → Publish** when you're happy

Do not unzip and re-zip from a folder that includes the folder itself — Shopify
expects `layout/`, `sections/` etc. at the archive root. This zip is already
built that way.

## After install — three settings that matter

**Theme settings → Brand**
- *Logo image* — your `Athlesio Logo.png`
- *Tiger linework* — export the tiger **without** the wordmark as a transparent
  PNG or SVG. It renders once per page at 6% opacity behind the "How to take it"
  section. It stops working the moment it appears twice, so it is deliberately
  not available anywhere else.

**Theme settings → Compliance**
- *Footer disclaimer* — on by default, required for food supplements
- *Show the US FDA (DSHEA) disclaimer* — **off by default and should stay off
  for the UK.** Creatine health claims are non-authorised in Great Britain
  (GB NHC register, entry 004UKNHCC, added 27 Feb 2025). Only switch it on when
  you serve the US market with structure/function claims.

**Hero section** — set the background image. Never bake text into it; baked-in
text can't be translated per market and is how the supplier creatives ended up
shipping with "STRENGHT" and "MUSCL".

## Sections

| Section | Purpose |
|---|---|
| Hero | Headline with gradient accent line, image + scrim, two CTAs |
| Trust bar | Four short facts under the fold |
| Featured product | Falls back to a product grid if no product is picked |
| Ingredient table | Monospaced dosage table — the highest-trust element on the page |
| How it works | Three steps. Carries the tiger watermark. |
| Honesty note | The creatine-gummy testing problem. **Only publish with a real CoA.** |
| FAQ | Native `<details>`, no JS dependency |

## Design rules baked in

- The **gradient touches display type only**. At 16px the plum end is 3.5:1 and
  fails WCAG AA — it is locked to ≥24px via `.grad`.
- Gold `#E3B545` on the page background is **9.6:1** — safe for CTA text and links.
- `--ath-fg-faint #68686C` is **3.3:1 and fails AA for all text.** It is used for
  dividers and the watermark only. For small grey text use `--ath-fg-muted` (7.1:1).
- Focus rings are never removed. 3px gold, 2px offset.
- All motion is `transform`/`opacity` only and fully disabled under
  `prefers-reduced-motion: reduce`.
- Minimum touch target 48×48px.

## Not included, on purpose

- **No cookie banner.** Use Shopify's built-in one: Settings → Customer privacy.
- **No review widget.** Add one only when you have real reviews.
- **No countdown timers or fake scarcity.** They are a payment-processor risk flag
  in the supplements category and they contradict the brand voice.
