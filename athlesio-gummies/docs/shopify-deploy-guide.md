# Shopify Deploy-Guide — Athlesio Muscle Boost Gummies

Schritt-für-Schritt vom leeren Shopify-Konto zum fertigen Single-Product-Shop.
Alles hier kannst du selbst umsetzen; wo ich direkt mithelfen kann, ist es markiert.

## 0. Sicherheit zuerst
- Passwörter, die du im Chat geteilt hast, **jetzt ändern** (Gmail, Shopify, Zendrop),
  je Dienst ein eigenes, plus 2-Faktor-Authentifizierung.
- Mir Zugriff geben (falls gewünscht) **nur** über: Shopify Staff-Einladung **oder**
  Admin-API-Token einer Custom App. **Nie** dein Passwort.

## 1. Shopify-Grundlage
1. Store anlegen, Sitz **Österreich**, Währung **EUR**.
2. Settings → Markets: Verkaufsländer auf **Deutschland + Österreich** begrenzen.
3. Settings → Taxes: Shopify Tax für DE (19 %) und AT (20 %) automatisch.
4. Theme: **Dawn** installieren (kostenlos, Online Store 2.0).

## 2. Marke im Theme hinterlegen
1. Online Store → Themes → Customize → Theme settings:
   - **Colors:** Hintergrund `#0E0E11`, Text `#F4F1F4`, Akzent/Verlauf
     Magenta `#E11D74` → Orange `#F5A524`.
   - **Typography:** Headings „Russo One"-Stil, Body „Chakra Petch" (oder via
     Google-Fonts-nächste im Shopify-Font-Picker).
2. Logo hochladen (dein Tiger-/Wortmarken-Logo). Favicon = Tiger-Icon.

## 3. Produkt anlegen
1. Products → Add product.
2. Titel/Beschreibung/Preis aus `content/produkt-muscle-boost-gummies.md` übernehmen
   (Copy ist bereits compliance-konform).
3. Produktbilder: die 5 gelieferten Bilder hochladen (Jar-Front, Lifestyle,
   Supplement Facts, Ingredients). Bild-Reihenfolge: Front zuerst.
4. **Wichtig (Recht):** Nährwerttabelle, Zutaten, Allergene, verantwortlicher
   Unternehmer, Verzehrempfehlung + Disclaimer aus `content/` und
   `docs/compliance-health-claims.md` einpflegen.

## 4. Custom Section einbauen (das Herzstück)
1. Lege im Theme-Code (Online Store → Themes → Edit code → Sections → Add a new section)
   die Datei **`shopify/sections/athlesio-product-landing.liquid`** aus diesem Repo an
   (Inhalt 1:1 kopieren).
2. Erstelle eine **Page** „Home" oder nutze das **Product template**:
   Customize → Add section → **„Athlesio Product Landing"**.
3. In den Section-Einstellungen:
   - **Produkt** = deine Muscle Boost Gummies (aktiviert den Warenkorb-Button).
   - Farben, Texte, Bundles sind alle im Customizer editierbar (Defaults sind schon gesetzt).
4. Optional: als **Startseite** setzen (Online Store → Preferences / Homepage template).

## 5. Tiered Bundle-Preise (2er/3er günstiger)
Die Section legt die gewählte **Menge** in den Warenkorb. Damit 2/3 Dosen wirklich
günstiger pro Stück sind, in **Admin → Discounts** je eine **automatische Rabattregel**
anlegen:
- „Kauf 2 Dosen → X % / fester Betrag Rabatt"
- „Kauf 3 Dosen → Y % Rabatt"
Alternativ eine Bundle-App (z. B. „Shopify Bundles"). Preise in der Section-Einstellung
so setzen, dass sie zu den Rabatten passen. **Grundpreis (je 100 g) ist Pflicht** —
in Shopify beim Produkt hinterlegen.

## 6. Zendrop als Lieferant verbinden
1. Shopify App Store → **Zendrop** installieren, per OAuth mit dem Store verbinden
   (kein Passwort an Dritte).
2. In Zendrop das Kreatin-Gummies-Produkt suchen/importieren, das aus einem
   **EU-Lager** (idealerweise DE/EU) versendet → damit das 2–5-Werktage-Versprechen hält.
3. Produkt mit deinem Shopify-Produkt **mappen** (Variante/SKU), Verkaufspreis prüfen,
   sodass nach Ads + Versand Marge bleibt (siehe Preisvorschläge in `content/`).
4. **Muster bestellen**, echte Lieferzeit nach DE **und** AT stoppen, Qualität +
   Etikett (DE-Pflichtangaben!) prüfen, bevor du Ads schaltest.

## 7. Pflichtseiten & rechtliche Basis (DE/AT)
- Impressum, Datenschutz, AGB, Widerrufsbelehrung + Muster-Widerrufsformular anlegen
  (Shopify Rechtstext-Generator als Start, dann anwaltliche Prüfung).
- Cookie-Consent-Banner (TTDSG/DSGVO) für TikTok/Meta-Pixel.
- Versand & Lieferzeit-Seite, Kontakt (support@athlesio.at).

## 8. Domain verbinden
- Settings → Domains → `athlesio.at` verbinden; die von Shopify angezeigten
  DNS-Einträge (A-Record + CNAME) im Hostinger-Panel eintragen. SSL kommt automatisch.

## 9. Tracking & Launch
- TikTok-Pixel + (optional) Meta-Pixel einbinden (nach Cookie-Consent).
- Testbestellung durchführen (Bezahlung, Bestätigungsmail, Zendrop-Weiterleitung).
- Erst dann Ads/Content starten (Hooks & Angles siehe `docs/markt-tiktok-recherche.md`).

## Was ich (Claude) direkt übernehmen kann, sobald du sicheren Zugang gibst
- Produkt + Beschreibung + SEO-Felder anlegen.
- Die Section-Datei ins Theme deployen und im Customizer konfigurieren.
- Rechtstext-Platzhalter + Seitenstruktur anlegen (finale Prüfung durch Anwalt).
- Domain-DNS-Werte heraussuchen und dich beim Hostinger-Eintrag anleiten.
