# LEO — Das ATHLESIO Maskottchen

## Konzept

LEO ist ein minimalistischer, muskulöser Löwen-Charakter — "König des
Home-Gyms". Er steht für die Markenwerte Stärke + Disziplin + Präzision
(siehe `docs/brand-strategy.md`). Einsatzorte: Verpackung, Social-Content,
Startseite, 404-Seite, Bundle-Kampagnen, kurze Animations-Clips für Ads.

**Stil:** flach-schattierte, 3D-Toy-artige Illustration mit kräftigen
schwarzen Konturen, athletische Flex-Pose, minimale Sportbekleidung mit
geometrischem Markenzeichen.

**Farben:** Graphite Black `#14151A`, Bone White `#F5F3EF`, Signal Lime
`#D6FF3F` — identisch zur Markenpalette.

## Generierte Assets (Higgsfield, `recraft_v4_1`)

Zwei Konzeptvarianten wurden generiert, beide 2048×2048px:

- **Variante A** — Job-ID `728e3844-4725-4395-b593-a9468a7c0a79`
  https://d8j0ntlcm91z4.cloudfront.net/user_3GrDazyvIxWQhyzUUiv11teVoo9/hf_20260723_151742_728e3844-4725-4395-b593-a9468a7c0a79.png
- **Variante B** — Job-ID `0b11f693-62ed-4ccc-81b9-e5058f2c145f`
  https://d8j0ntlcm91z4.cloudfront.net/user_3GrDazyvIxWQhyzUUiv11teVoo9/hf_20260723_151742_0b11f693-62ed-4ccc-81b9-e5058f2c145f.png

Variante A wurde als Basis für die Animation gewählt.

## Animation (Higgsfield, `kling3_0_turbo`, Bild-zu-Video)

Flex-/Power-Pose-Loop, 5 Sekunden, 1080p, 1:1, ausgehend von Variante A.

- **Job-ID:** `90fab434-3cd4-4b83-8dfc-6cbdd825aad0`
- **Ergebnis-URL (MP4):**
  https://d8j0ntlcm91z4.cloudfront.net/user_3GrDazyvIxWQhyzUUiv11teVoo9/hf_20260723_151854_90fab434-3cd4-4b83-8dfc-6cbdd825aad0.mp4
- Jederzeit erneut abrufbar über `job_display` mit obiger Job-ID.

## Wichtiger Hinweis zur Asset-Ablage

Die generierten Bild-/Video-Dateien liegen auf der Higgsfield-CDN
(`cloudfront.net`). Der Netzwerk-Egress dieser Session lässt aktuell keinen
direkten Download dieser Domain per `curl`/Bash zu (Policy-Block, 403). Die
Assets sind aber:

1. **direkt im Chat dieser Session sichtbar** (inline gerendert), und
2. **über die oben genannten Job-IDs jederzeit erneut abrufbar**
   (`mcp__Higgsfield__job_display`) bzw. über die **Higgsfield Apps-UI**
   herunterladbar.

Sobald Shopify-Zugang besteht, empfehle ich: Bilder/Video direkt aus der
Higgsfield-Oberfläche herunterladen und als Theme-Assets (Logo, Startseiten-
Hero-Video, Verpackungsdruckvorlage) in Shopify hochladen — oder mir dafür
zusätzlich Zugriff auf einen Ablageort (z. B. Google Drive/Dropbox-Link)
geben, den ich befüllen kann.

## Nächste Ausbaustufen für LEO

- Zusätzliche Posen: Idle-Loop für Store-Header, "Daumen hoch"/Freigabe für
  Trust-Badges, Lauf-/Cardio-Pose passend zum StepCore-Produkt.
- Vektor-/Flach-Logo-Variante (Recraft `model_type: vector`) für Favicon,
  Verpackungsdruck und Social-Profilbild.
- Kurze 9:16-Reels-Version für Instagram/TikTok-Launch-Content.
