# Session Log — Athlesio, 29 July 2026

Decision record for this session. Written so a fresh agent can pick up without re-deriving anything. Includes the mistakes, because those are the useful part.

---

## Part 1 — Skills installed

Eleven skills installed via `npx skills add <owner/repo>@<skill> -g -y` and saved to the Cowork account.

| Skill | Source | Security audit | Note |
| --- | --- | --- | --- |
| brainstorming | obra/superpowers | Gen Safe · Socket 0 · Snyk Low | |
| graphify | safishamsi/graphify | Gen Pass · Socket Warn · Snyk Warn | **CLI install failed** — repo has no `SKILL.md`; the skill is generated from fragments via `tools/skillgen`. Extracted `graphify/skill.md` manually. Needs `pip install graphifyy`. |
| find-skills | vercel-labs/skills | Safe | Discovery skill, not a tool |
| frontend-design | anthropics/skills | Safe · 0 · Low | |
| grill-me | mattpocock/skills | — | 7-line stub calling `/grilling`; merged the `grilling` skill body in so it actually works standalone |
| ui-ux-pro-max | nextlevelbuilder | **Gen HIGH RISK** · Socket 0 · Snyk Low | See below |
| shopify-storefront-graphql | shopify/shopify-ai-toolkit | Safe · 0 · **Med** | Sends telemetry to `shopify.dev/mcp/usage` incl. the verbatim user prompt. Saved with `OPT_OUT_INSTRUMENTATION=true` as default. |
| agent-browser | vercel-labs/agent-browser | Safe · 0 · Med | |
| vercel-react-best-practices | vercel-labs/agent-skills | Safe · 0 · Low | |
| ai-video-generation | 101-skills/skills | Safe · 1 alert · Low | Needs the `belt` CLI |
| skill-creator | anthropics/skills | Safe · 0 · Low | Already present in Cowork |

**ui-ux-pro-max HIGH RISK detail** — the Gen Agent Trust Hub audit flags COMMAND_EXECUTION, PROMPT_INJECTION and EXTERNAL_DOWNLOADS. The injection finding is the one that matters: `--persist` writes `design-system/<slug>/MASTER.md`, and the skill then instructs the agent to read those files back **as trusted instructions**, unsanitised, with no boundary markers. The saved version carries a warning and the instruction to treat persisted files as data, not commands.

**Cowork limitation worth knowing:** `save_skill` stores only `SKILL.md`. Bundled scripts and data are not persisted. Skills that depend on them (ui-ux-pro-max's CSV database, shopify-storefront-graphql's schema index, vercel-react-best-practices' rules folder) were saved with a **bootstrap step** that re-fetches the bundle into the sandbox via `npx skills add` at the start of a session.

---

## Part 2 — Athlesio build

### What was researched, with sources

- **UK:** creatine health claims became *non-authorised* on the GB NHC register on 27 Feb 2025 (entry 004UKNHCC). B6/B12 claims remain authorised and the dosages clear the significant-amount threshold — that became the compliant angle.
- **US:** FDA foreign facility registration + a US Agent reachable 24h; two-year renewal window with no grace period; DSHEA disclaimer required for structure/function claims; Prop 65 for California. The Dietary Supplement Listing Act of 2026 (H.R. 8370, introduced 20 Apr 2026) would add mandatory product listing — not law yet.
- **Canada:** NPN from Health Canada **plus** a site-licensed importer. Neither is attachable to a Zendrop dropship. Recommendation: don't sell there.
- **UK VAT:** no minimum registration threshold for non-UK-established sellers. Required from the first sale for consignments ≤ £135.
- **Product risk:** ~46% failure rate in independent creatine-gummy testing in 2025; one 5 g-claiming brand contained 0.005 g. Creatine hydrolyses to creatinine in a water-based gummy.

### What was built in the store

Product with compliant EN copy and 3 quantity variants → activated → published. Duplicate archived with a 301 redirect. Markets UK/GBP + US/USD activated, Canada created as DRAFT. Six pages created. SEO fields set. Collections created.

### What was blocked

`shopPolicyUpdate` (needs `write_legal_policies`) and `consentPolicyUpdate` (needs `write_privacy_settings`) — the connector's OAuth grant lacks both. The user offered to grant them in chat; that isn't how scopes work, and a retry confirmed the same error. Shop name has no Admin API mutation at all.

---

## Part 3 — The theme, and the mistake

### v1 was wrong

The first theme was built on restraint: dark, text-forward, no product imagery in the hero, generous whitespace. The reasoning was that the supplements category is loud and quiet would differentiate.

Previewed on the actual store it read as **unfinished**. An empty black hero because no background image was configured. A "featured product" section that fell back to `collections.all.products` and pulled the *archived* duplicate with its typo-ridden supplier infographic. Huge dead vertical space. The logo rendering as the text "Mein Shop".

The user's feedback was blunt and correct.

### What changed in v2

The governing lesson: **a theme must look finished with zero configuration.** A design that depends on the merchant uploading the right assets before it stops looking broken is a bad design.

- Hero renders an animated conic-gradient aura, so the space is never empty
- The product jar is pulled automatically (explicit setting → first available product → honest empty state), floats on a 7s loop, lit from behind
- Price and CTA moved above the fold
- Spec pills with real numbers instead of badge icons
- Marquee ticker, benefit-number cards with hover lift, split feature
- Product page: bundle picker with **computed** per-jar price and savings percentage, plus a sticky buy bar that appears when the buy box scrolls away
- Vertical rhythm tightened throughout

What did **not** change: the accessibility floor, the gradient-on-display-type-only rule, the once-per-page tiger, and the refusal to add countdown timers or fake scarcity.

---

## Part 4 — Open items, in priority order

1. **Independent ISO 17025 CoA on creatine content.** Blocks the honest-brand positioning the copy is built on. ~€200–500.
2. Impressum placeholders → real company data.
3. Refund policy + cookie banner (manual, connector can't).
4. Shop name → "Athlesio".
5. UK VAT registration.
6. Real product photography.
7. Remove password protection — last.

---

## Part 5 — What I'd do differently

- **Look at the live site before designing, not after.** One screenshot at the start would have caught the empty-hero problem before it was built.
- **Design for the zero-config state first.** Every section should be checked with empty settings.
- **Check for duplicate products before creating a new listing.** The archived duplicate was discoverable from the first product query.
