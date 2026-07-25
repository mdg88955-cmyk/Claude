# Produkt per CSV importieren

Datei: `muscle-boost-gummies.csv` (import-fertig, Handle `muscle-boost-gummies`,
3 Varianten als Bundles).

## So geht's
1. Shopify-Admin → **Produkte → Importieren** → CSV `muscle-boost-gummies.csv` wählen → Importieren.
2. Ergebnis: ein Produkt „Athlesio Muscle Boost Gummies" mit Option **Menge** und drei Varianten:
   - 1 Dose – 29,95 € (statt 39,95 €)
   - 2 Dosen – 54,95 € (statt 79,90 €)
   - 3 Dosen – 74,95 € (statt 119,85 €)
3. **Bilder** hinzufügen: im Produkt die 5 Produktbilder hochladen (CSV enthält keine Bild-URLs).
4. **Startseite verdrahtet sich automatisch:** Die Bundle-Section des Themes zeigt standardmäßig
   auf das Handle `muscle-boost-gummies` → die 3 Varianten erscheinen sofort.

## Wichtig zur Fulfillment-Logik (Zendrop)
Die Varianten „2 Dosen" / „3 Dosen" sind **eine** Bestellzeile, die 2 bzw. 3 physische Dosen
enthält. In Zendrop das Mapping so einstellen, dass diese Varianten die entsprechende Stückzahl
auslösen (bzw. als Bundle mit 2/3 Einheiten anlegen). Verkaufspreise ggf. an den echten
Zendrop-Einkauf anpassen, damit nach Ads + Versand die Marge stimmt.

## Grundpreis (Pflicht)
Für Nahrungsergänzung ist der Grundpreis (z. B. je 100 g / je Stück) Pflicht — im Produkt
unter „Preis" bzw. über eine Grundpreis-App/Meta-Feld hinterlegen.
