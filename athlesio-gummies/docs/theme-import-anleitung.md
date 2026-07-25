# Theme importieren & Rechtstexte aktivieren

Die fertige Datei: `athlesio-theme-shopify.zip` (deine Marke + Tiger-Logo unverändert,
ergänzt um Impressum, AGB, Widerruf, Datenschutz, Versand & Kontakt).

## 1. Theme hochladen
1. Shopify-Admin → **Online-Store → Themes**.
2. Oben **Theme hinzufügen → Zip-Datei hochladen** → `athlesio-theme-shopify.zip` wählen.
3. Nach dem Upload **Vorschau** ansehen, dann bei Gefallen **Veröffentlichen**.

## 2. Rechtsseiten anlegen (5 Min – wichtig!)
Die Rechtstexte liegen als **Seiten-Templates** im Theme. Du musst pro Seite nur einmal
eine leere Seite anlegen und das passende Template zuweisen:

**Online-Store → Seiten → Seite hinzufügen** → Titel eingeben → rechts unter
**Theme-Vorlage** das Template wählen → **Speichern**. Für jede Zeile einmal:

| Seitentitel | Handle (URL) | Theme-Vorlage |
|---|---|---|
| Impressum | `impressum` | `page.impressum` |
| AGB | `agb` | `page.agb` |
| Widerruf | `widerruf` | `page.widerruf` |
| Datenschutz | `datenschutz` | `page.datenschutz` |
| Versand & Zahlung | `versand` | `page.versand` |
| Kontakt | `kontakt` | `page.kontakt` |

> Wichtig: Das **Handle** muss exakt so lauten (klein, ohne Umlaute), damit die
> Footer-Links passen (`/pages/impressum` usw.). Shopify bildet das Handle aus dem
> Titel – bei „Versand & Zahlung" das Handle im Feld manuell auf `versand` setzen.

Der Seiteninhalt selbst kann **leer** bleiben – der Text kommt aus dem Template.

## 3. Footer-Links
Die Links im Footer funktionieren **sofort** (Fallback ist eingebaut), sobald die Seiten
mit den obigen Handles existieren. Für eine eigene Reihenfolge optional ein Menü anlegen:
**Online-Store → Menüs → Menü hinzufügen**, Titel `footer`, Links zu den Seiten.

## 4. Platzhalter ausfüllen (Pflicht vor Launch)
In den Rechtstexten stehen `[Platzhalter]` – diese **musst** du ersetzen:
- Impressum: echter Name/Firma, Anschrift, Telefon, UID/Firmenbuch, Gewerbe/WKO.
- AGB/Datenschutz/Widerruf: Firmendaten, Datum, tatsächliche Zahlungs-/Versandpartner.
- Versand: echte Versandkosten & Schwellen.

Zum Bearbeiten: **Online-Store → Themes → … → Code bearbeiten → Sections →**
`legal-impressum.liquid` usw. (oder du verschiebst den Text in die Seite selbst).

> ⚖️ **Vor dem Live-Gang anwaltlich prüfen lassen.** Die Texte sind sorgfältige
> Vorlagen, aber kein Rechtsrat. Impressum, Datenschutz, AGB und Widerruf müssen zu
> deinem Unternehmen passen und rechtssicher sein. Health-Claims (Kreatin/Vitamine)
> ebenfalls prüfen – siehe `docs/compliance-health-claims.md`.

## 5. Was noch fehlt bis „live"
- Produkt anlegen (Copy in `content/produkt-muscle-boost-gummies.md`).
- Zendrop verbinden, EU-Lager-Lieferant, Muster bestellen.
- Domain `athlesio.at` verbinden (DNS bei Hostinger).
- Cookie-Consent + Testbestellung, dann veröffentlichen.

Details im `docs/shopify-deploy-guide.md` bzw. im interaktiven Setup-Assistenten
(`brand/setup-assistent.html`).

## Was in diesem Theme neu ist (gegenüber deinem Export)
- 6 neue Sections: `legal-impressum`, `legal-agb`, `legal-widerruf`,
  `legal-datenschutz`, `legal-versand`, `contact`.
- 6 neue Seiten-Templates: `page.impressum/agb/widerruf/datenschutz/versand/kontakt`.
- Footer: automatische Fallback-Links zu den Rechtsseiten.
- `settings_schema.json`: Farben & Schrift jetzt im Customizer editierbar (Look unverändert).
- `theme.css`: Styles für die Rechts-/Kontaktseiten ergänzt.
- **Unverändert:** dein Tiger-Logo (`assets/logo.png`), Farben, Hero-Video, alle
  bestehenden Sections und die Startseite.
