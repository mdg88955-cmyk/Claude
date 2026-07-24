# Athlesio Muscle Boost — Design-Richtung

Abgeleitet aus dem vom Gründer gelieferten Logo (Tiger-Kontur, Wortmarke „Athlesio"
im Magenta→Orange-Verlauf auf Near-Black, „by Davide Martino") und dem
ui-ux-pro-max Design-System (Pattern: Hero-Centric + Product-Review-Focused,
Style: Modern Dark / Cinematic). Der vom Tool vorgeschlagene grüne Akzent wird
**bewusst verworfen** — die Markenfarben kommen aus dem Logo.

## Farb-Token

| Rolle | Hex | Verwendung |
|---|---|---|
| Ink / Base | `#0E0E11` | Seitenhintergrund (Near-Black, nicht reines #000 → kein OLED-Smear) |
| Surface | `#17171C` | Karten, erhöhte Flächen |
| Surface-2 | `#201F27` | Inputs, Divider-Flächen |
| Brand Magenta | `#E11D74` | Verlauf-Start, Akzent |
| Brand Orange | `#F5A524` | Verlauf-Ende, Akzent |
| Berry (Produkt) | `#C81E45` | Produktkontext, „Serving"-Highlight (aus dem Etikett) |
| Bone / Text | `#F4F1F4` | Primärtext auf Dunkel |
| Muted | `#9A97A3` | Sekundärtext |
| Line | `rgba(244,241,244,.10)` | Hairlines |

**Signature-Verlauf:** `linear-gradient(100deg, #E11D74 0%, #F5A524 100%)` — exakt aus der
Wortmarke. Wird sparsam eingesetzt: Wortmarke, primärer CTA, „5 000 mg"-Zahl,
Fortschritts-/Highlight-Elemente. Nicht flächendeckend (sonst KI-Default „Dark + Neon").

## Typografie

- **Display:** kräftige, breite Grotesk (Shopify-Theme: „Russo One" / „Anton"-Stil via
  Google Fonts; HTML-Prototyp: schwerer System-Grotesk-Stack, da CSP externe Fonts blockt).
- **Body:** klare, technische Grotesk („Chakra Petch" im Theme / System-Sans im Prototyp).
- **Data-Voice:** Monospace für Dosierungen, Supplement-Facts, Preise (Messwert-Charakter).
- Type-Scale konsequent, Uppercase-Labels mit Letter-Spacing.

## Signature-Element

**„Dosis-Transparenz-Badge"** — die Zahl **5 000 mg Kreatin / Portion** als
wiederkehrendes, im Verlauf gesetztes Hero-Element. Es adressiert direkt den
Haupt-Einwand gegen Gummies (Unterdosierung) und ist damit der ehrlichste,
konversionsstärkste visuelle Anker. Kein Deko-Element — es trägt echte Information.

## Motion (dezent, `prefers-reduced-motion` respektiert)

- Stagger-Reveal der Feature-/Trust-Karten beim Scrollen (aus dem Skill-GSAP-Preset,
  im Prototyp mit IntersectionObserver umgesetzt).
- Sanfter Verlaufs-Shift im Hero (ambient), Hover-Scale 0.97→1.0 auf Buttons.
- Sticky Buy-Bar auf Mobile.

## Layout-Konzept

Single-Product-Landing/PDP in einem: Hero (Produkt + Rating + Dosis-Badge + CTA) →
Trust-Leiste → „Warum Gummies statt Pulver" (Vergleich) → Wirkung (nur zugelassene
Claims) → Supplement Facts → Bundle-Auswahl (1/2/3 Dosen) → Bewertungen/UGC → FAQ →
Disclaimer/Footer. CTA oberhalb der Falz + nach Social Proof wiederholt.

## Pre-Delivery-Checkliste (aus ui-ux-pro-max)

- [x] Keine Emojis als Icons (SVG statt Emoji im UI)
- [x] `cursor: pointer` auf allen Klick-Elementen
- [x] Hover-States 150–300 ms
- [x] Kontrast ≥ 4.5:1 (Akzent auf Dunkel geprüft)
- [x] Sichtbarer Keyboard-Fokus
- [x] `prefers-reduced-motion` respektiert
- [x] Responsiv 375 / 768 / 1024 / 1440
