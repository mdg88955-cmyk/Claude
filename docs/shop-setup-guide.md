# ATHLESIO — Shopify Store Setup Guide

Dieser Guide ist so geschrieben, dass du (oder ich, sobald du mir Zugang zu
Shopify/Hostinger/Gmail gibst) ihn Schritt für Schritt abarbeiten kann, um
den Store live zu bringen.

## Wichtiger Hinweis zu "Kontrolle übergeben"

Ich kann kein Shopify-Admin-Login oder Hostinger-Login "übernehmen" wie ein
Mensch im Browser. Praktikabel sind stattdessen:

- **Shopify:** Du legst mich als **Mitarbeiter (Staff Account) mit
  eigener E-Mail-Adresse** in deinem Shopify-Admin an (Settings → Users
  and permissions → Add staff), ODER du gibst mir Zugriff über die
  **Shopify Admin API** (eine Custom App mit API-Zugriffstoken). Damit
  kann ich Produkte, Collections, Theme-Code etc. direkt setzen/ändern.
- **Hostinger/Domain:** Domain-Kauf und DNS-Verbindung (athlesio.at →
  Shopify) machst du im Hostinger-Panel selbst (Zahlungsdaten!); ich kann
  dich Schritt für Schritt anleiten, welche DNS-Einträge (A-Record/CNAME)
  Shopify dir für die Custom Domain vorgibt.
- **Gmail:** ein Konto für Shop-Kommunikation (support@athlesio.at später
  per Google Workspace oder E-Mail-Weiterleitung) — ich brauche hier keinen
  direkten Zugriff, nur die Adresse für Impressum/Kontaktseite.

## 1. Shopify-Grundeinrichtung

1. Shopify-Konto erstellen, Store-Name "ATHLESIO", Sitz Österreich,
   Standardwährung EUR.
2. Theme: **Dawn** (kostenloses Shopify-Referenz-Theme, Online Store 2.0)
   als Basis — schnell, sauber, gut für Custom-Anpassungen ohne
   Ladezeit-Probleme. Alternativ ein Premium-Theme im "clean/athletic"
   Stil, falls Budget vorhanden.
3. Branding in Shopify hinterlegen (Settings → Brand): Farben aus
   `docs/brand-strategy.md` (Graphite `#14151A`, Signal Lime `#D6FF3F`,
   Bone White `#F5F3EF`), Logo (aus Maskottchen-Assets ableiten, siehe
   `/mascot`), Slogan "Trainiere präzise. Liefere schnell."
4. Sprache/Markt: Deutsch als Shop-Sprache, Verkaufsländer auf
   Deutschland + Österreich einschränken (Settings → Markets), Preise in
   EUR, MwSt.-Einstellungen für AT (20 %) und DE (19 %) über Shopify Tax
   automatisch verwalten lassen.

## 2. Navigation & Seitenstruktur

**Hauptmenü:**
- Home Gym Starter Bundle (Startseiten-Fokus)
- PowerBand Set
- FlexBoard
- StepCore
- Über ATHLESIO
- Versand & Lieferzeit
- Kontakt

**Collections:**
- `Alle Produkte`
- `Home Gym Starter Bundle` (Cross-Sell aller 3 Produkte)
- Optional später: `Kraft`, `Mobility`, `Cardio` als Kategorien, sobald
  Sortiment wächst.

**Footer:**
- Rechtliches: Impressum, AGB, Widerrufsrecht, Datenschutz (Pflicht für
  DE/AT — über Shopify-Rechtstexte-Generator oder Anwalt erstellen lassen)
- Versand & Rückgabe
- Kontakt / Support
- Social Links (Instagram/TikTok für Personal-Brand-Content)

## 3. Produkte anlegen

Die drei Hero-Produkte inkl. Titel, Meta-Beschreibung, Bullet-Points und
Preisvorschlag liegen fertig vor:

- `content/products/01-powerband-set.md`
- `content/products/02-flexboard.md`
- `content/products/03-stepcore-mini-stepper.md`

Beim Anlegen in Shopify: Preis + Vergleichspreis (compare_at_price) für
Rabatt-Optik setzen, Produktbilder vom gewählten Lieferanten oder eigene
Fotos hochladen, Varianten (Farbe) anlegen, SEO-Felder aus den
Markdown-Dateien übernehmen.

## 4. Apps (Startpaket)

| Zweck | Beispiel-App |
|---|---|
| Dropshipping/Sourcing | Spocket, Syncee oder BigBuy (siehe `docs/supplier-shortlist.md`) |
| Bewertungen/Trust | Judge.me oder Loox (Produktfotos von Kund:innen) |
| E-Mail/Post-Purchase | Shopify Email oder Klaviyo (Willkommens-Flow, Bundle-Upsell) |
| Sendungsverfolgung | ParcelPanel oder Shopify-eigenes Tracking |
| Rechtstexte DE/AT | Trusted Shops oder Anwalt.de Rechtstexte |

## 5. Domain athlesio.at verbinden

1. In Shopify: Settings → Domains → "Connect existing domain" →
   `athlesio.at` eingeben.
2. Shopify zeigt dir die nötigen DNS-Einträge (i. d. R. A-Record auf
   Shopify-IP + CNAME für `www`).
3. Im Hostinger-Panel unter DNS-Zone diese Einträge exakt so hinterlegen.
4. Propagation abwarten (bis 48 Std., meist schneller), SSL wird von
   Shopify automatisch ausgestellt.

## 6. Launch-Reihenfolge (empfohlen)

1. PowerBand Set launchen (niedrigste Einstiegshürde, beste Marge) +
   Maskottchen-Content für Social Ads.
2. FlexBoard nachziehen, "Core & Mobility Duo" bewerben.
3. StepCore ergänzen, "Home Gym Starter Bundle" komplettieren.
4. Personal-Brand-Content (Gründer + LEO Maskottchen) parallel auf
   Instagram/TikTok aufbauen, um organischen Traffic zusätzlich zu Ads
   aufzubauen.

## 7. Was ich jetzt schon vorbereitet habe (dieses Repo)

- `docs/brand-strategy.md` — Positionierung, Farben, Ton, Maskottchen-Konzept
- `docs/supplier-shortlist.md` — Lieferanten-/Fulfillment-Kandidaten
- `content/products/` — fertige Produkttexte für alle 3 Hero-Produkte
- `content/pages/` — Über-uns, Versand, Kontakt-Textbausteine
- `mascot/` — generiertes LEO-Maskottchen (Bild + Animation)

Sobald du mir Shopify-Staff-Zugang oder ein Admin-API-Token gibst, kann ich
diese Inhalte direkt im Store anlegen, statt dass du sie manuell kopierst.
