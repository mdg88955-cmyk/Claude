# Athlesio — Brand & Design System

Derived from your actual logo, not from a template. I sampled the colours out of `Athlesio Logo.png` directly.

---

## 1. Where this comes from

Your logo does something most supplement brands don't: it puts a **hand-drawn linework tiger** behind the wordmark and lets the wordmark sit *over* the animal's face rather than beside it. The tiger is barely-there grey on near-black — it reads as texture before it reads as an animal. The wordmark carries the only saturation on the whole mark, in a **vertical plum-to-gold gradient**.

That is a genuinely distinctive starting point, and the store should be built from it. The category default for sports nutrition is black + acid green, or black + electric blue, with a chrome-effect wordmark. You already have something better; don't spend it.

**The one deliberate risk:** most supplement stores are loud. Athlesio should be *quiet and dark*, with the gradient used sparingly — never as a background wash, only on type and one accent element per screen. The tiger linework becomes an ambient texture at 4–8% opacity behind section breaks. Restraint is the differentiator here, because nobody else in the category has any.

---

## 2. Colour tokens

Sampled from the logo file.

```css
:root {
  /* Core */
  --ath-ink:        #14141A;  /* page background — deeper than the logo's #1B1B22 */
  --ath-surface:    #1B1B22;  /* cards, panels — the logo's own background */
  --ath-surface-2:  #24242D;  /* raised surfaces, inputs */
  --ath-line:       #32323D;  /* borders, dividers */

  /* Brand gradient (vertical, top → bottom) */
  --ath-plum:       #9A5683;  /* gradient start */
  --ath-rose:       #B77C6A;  /* gradient midpoint */
  --ath-gold:       #E3B545;  /* gradient end */
  --ath-gradient:   linear-gradient(180deg, #9A5683 0%, #B77C6A 52%, #E3B545 100%);

  /* Type */
  --ath-fg:         #F2F0EC;  /* primary text — warm off-white, not #FFF */
  --ath-fg-muted:   #A3A0AA;  /* secondary text */
  --ath-fg-faint:   #68686C;  /* the tiger's own grey — DECORATIVE ONLY, see below */

  /* Functional */
  --ath-success:    #4E9A6B;
  --ath-warning:    #E3B545;  /* reuse gold */
  --ath-danger:     #C4544B;
  --ath-focus:      #E3B545;  /* 3px outline, never removed */
}
```

**Accessibility check — measured, not assumed.** Contrast ratios against `--ath-ink #14141A`:

| Token | Ratio | Verdict |
|---|---|---|
| `--ath-fg` #F2F0EC | **16.1:1** | AAA everywhere |
| `--ath-gold` #E3B545 | **9.6:1** | AAA everywhere — safe for CTA text and links |
| `--ath-fg-muted` #A3A0AA | **7.1:1** | AAA body, AAA large |
| `--ath-plum` #9A5683 | **3.5:1** | ⚠ **Large text (≥24px / ≥19px bold) and non-text only.** Fails AA for body copy. |
| `--ath-fg-faint` #68686C | **3.3:1** | ⚠ **Fails AA for all text.** Decorative use only — dividers, the tiger watermark, disabled-state fills. Never captions or legal text. |

Two consequences:

1. The gradient runs plum-at-top to gold-at-bottom **on display type only**. At 48px+ the plum end is legible; at 16px it isn't.
2. If you need small grey text, use `--ath-fg-muted`, not `--ath-fg-faint`. Legal and caption text especially — that's exactly the content people need to be able to read.

**Rule: the gradient never touches body text, never fills a background, never appears twice on one screen.**

---

## 3. Typography

The logo wordmark is a geometric grotesque with a very high x-height and tight apertures — close to **Archivo** or **Poppins SemiBold**. Pair it against something with more personality than Inter, which is the AI-default and reads as anonymous.

| Role | Face | Weights | Use |
|---|---|---|---|
| **Display** | **Archivo Expanded** | 700, 800 | Hero headline, section headers, product name. Set tight: `letter-spacing: -0.02em`, `line-height: 0.95`. Uppercase for anything under 5 words. |
| **Body** | **Söhne** *or* **Inter** as fallback | 400, 500 | Product copy, FAQ, policies. `line-height: 1.6`, max `68ch` measure. |
| **Utility** | **JetBrains Mono** | 400, 500 | Dosages, serving sizes, batch numbers, the Supplement Facts panel. |

```
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@700;800&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
```

**Why mono for the numbers.** Supplement pages live or die on whether the dosage table looks credible. Monospaced figures in a bordered table read like a spec sheet rather than marketing — which is exactly the trust signal this category needs, and exactly what the failed-testing coverage has trained buyers to look for.

**Type scale** (1.25 ratio, 16px base):

```
--text-xs:   12px    caption, legal
--text-sm:   14px    meta, labels
--text-base: 16px    body
--text-lg:   20px    lead paragraph
--text-xl:   25px    subsection
--text-2xl:  31px    section header
--text-3xl:  49px    page header
--text-4xl:  76px    hero (clamp down to 40px on mobile)
```

---

## 4. Spacing and layout

```
--space-1:  4px     --space-5:  32px
--space-2:  8px     --space-6:  48px
--space-3:  12px    --space-7:  64px
--space-4:  16px    --space-8:  96px
```

- **Container:** `max-width: 1200px`, `padding-inline: clamp(16px, 5vw, 48px)`
- **Grid:** 12-column desktop, 4-column mobile, `gap: var(--space-5)`
- **Breakpoints:** 480 / 768 / 1024 / 1280, mobile-first
- **Radius:** `--radius-sm: 4px`, `--radius: 8px`, `--radius-lg: 16px`. Buttons use `--radius`. Nothing is fully rounded — the logo's linework is angular.

---

## 5. The signature element

**The tiger as a scroll-revealed watermark.**

Extract the tiger linework from the logo as a standalone SVG (no wordmark). Place it once per page — behind the "How it works" section — at **6% opacity, 1400px wide, bleeding off both edges**, so only the eyes and muzzle linework are visible. As the user scrolls it translates upward at 0.3× scroll speed.

That's it. One appearance. It is the thing the page is remembered by, and it stops working the moment it appears twice.

**Do not:** put the tiger on the product card, the favicon background, the loading state, and the footer. That is the instinct and it is wrong.

---

## 6. Motion

Standard tier — visible but not showy.

```js
// Section reveal on scroll
gsap.from('.section > *', {
  opacity: 0, y: 20, duration: 0.5,
  stagger: 0.06, ease: 'power2.out',
  scrollTrigger: { trigger: '.section', start: 'top 75%' }
});

// Button press
transform: scale(0.98); transition: transform 120ms cubic-bezier(0.16,1,0.3,1);
```

- Durations: **150–300ms** for interaction feedback, **400–500ms** for entrance
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) as the house curve
- Animate `transform` and `opacity` only — never `width`, `height`, `top`, or `left`
- **`@media (prefers-reduced-motion: reduce)` must disable all of it.** Non-negotiable.

---

## 7. Component notes

**Buttons**

| Variant | Background | Text | Use |
|---|---|---|---|
| Primary | `--ath-gold` | `--ath-ink` | Add to cart. One per screen. |
| Secondary | transparent, `1px solid --ath-line` | `--ath-fg` | Learn more, size guide |
| Ghost | none | `--ath-fg-muted` | Tertiary links |

Minimum touch target **44 × 44px**, minimum 8px between adjacent targets. Focus ring is a **3px `--ath-gold` outline with 2px offset** and is never removed.

**Product card**
`--ath-surface` background, `1px solid --ath-line`, image on a `--ath-surface-2` plate so the dark jar doesn't disappear. Price in `--ath-fg`, not gold — gold is reserved for the CTA.

**Dosage table**
Bordered, `JetBrains Mono` figures, ingredient names in body face, `--ath-surface-2` header row. This is the highest-trust element on the page; give it room.

**Trust strip**
Directly under the add-to-cart, not in the footer: independent lab test status, shipping origin, returns window. Text only, no badge icons — badge icons read as fake in this category.

---

## 8. Imagery direction

- **Product shots:** dark seamless, single hard key light from upper left, deep falloff. The jar is already dark-labelled, so it needs rim light on the right edge to separate from the background.
- **Lifestyle:** desaturated, high-contrast gym interiors. Warm practicals in the background picking up the gold. **No stock-photo smiling.**
- **Never:** the plum-to-gold gradient as a photo overlay. It cheapens instantly.
- **Never:** text baked into product images. It can't be translated, can't be edited, and is how the Zendrop creatives ended up shipping with "STRENGHT" and "MUSCL" typos.

---

## 9. Voice

Athlesio is not a hype brand. The category is currently drowning in hype and simultaneously being exposed by lab testing — the opening is to be the brand that sounds like it has nothing to hide.

- **Specific over superlative.** "5,000 mg creatine monohydrate per 3-gummy serving" beats "maximum strength formula."
- **Say what it doesn't do.** "Creatine doesn't work overnight — the research is on 3–4 weeks of daily use" builds more trust than any badge.
- **Active voice, plain verbs.** "Take three gummies," not "consumers should consider consuming."
- **No exclamation marks. No emoji. No ALL-CAPS shouting** outside display type.
- **The button that says "Add to cart" produces a message that says "Added."** Same vocabulary throughout.

**Tagline candidates** (from the logo's existing "BY DAVIDE MARTINO" personal-brand structure):
- *Built, not hyped.*
- *Know what's in it.*
- *The boring part, done properly.*

The third one is the strongest and the riskiest — it is the only one a competitor couldn't also use.
