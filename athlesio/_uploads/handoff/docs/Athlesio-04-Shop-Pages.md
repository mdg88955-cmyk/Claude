# Athlesio — Shop & Legal Pages

Drafts for the pages Shopify needs before launch. **These are drafts, not legal documents.** Austrian e-commerce law (ECG, FAGG, KSchG) and UK/US consumer law all apply to you simultaneously once you sell cross-border. Have a lawyer review before you go live — the sections most likely to need changing are flagged.

Placeholders in `[BRACKETS]` need your real details.

---

## 1. Impressum / Legal Notice

*Required under §5 ECG and §25 MedienG. This is not optional in Austria and the fine for getting it wrong is real.*

```
IMPRESSUM

Medieninhaber und Diensteanbieter
[Vollständiger Firmenwortlaut, z. B. Davide Martino e.U.]
[Straße und Hausnummer]
[PLZ Ort], Österreich

E-Mail:    info@athlesio.at
Telefon:   [Telefonnummer]

Unternehmensgegenstand:  Online-Handel mit Nahrungsergänzungsmitteln
Firmenbuchnummer:        [FN ...]
Firmenbuchgericht:       [Landesgericht ...]
UID-Nummer:              [ATU...]
Gewerbebehörde:          [Bezirkshauptmannschaft / Magistrat ...]
Mitglied der:            WKO, Fachgruppe Handel
Anwendbare Rechtsvorschriften: Gewerbeordnung (www.ris.bka.gv.at)

Online-Streitbeilegung
Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
bereit: https://ec.europa.eu/consumers/odr
Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
vor einer Verbraucherschlichtungsstelle teilzunehmen.
```

**⚠ Check:** if you are not registered in the Firmenbuch (e.g. sole trader below the threshold), drop the Firmenbuch lines and state your full personal name and address instead. The address must be a real one — a P.O. box is not sufficient.

---

## 2. Shipping Policy

```
SHIPPING

Where we ship
Austria and the EU · United Kingdom · United States

We do not currently ship to Canada. Creatine supplements sold in Canada
require a Natural Product Number from Health Canada, which this product
does not hold.

Processing
Orders are processed within 1–2 business days. Orders placed after 14:00 CET
on Friday are processed the following Monday.

Delivery times (after dispatch)
  Austria                 2–4 business days
  EU                      3–7 business days
  United Kingdom          [X–Y] business days
  United States           [X–Y] business days

Shipping costs
  Austria                 €[X] · free over €[X]
  EU                      €[X] · free over €[X]
  United Kingdom          £[X] · free over £[X]
  United States           $[X] · free over $[X]

Customs, duties and import VAT
Orders shipped outside the EU may be subject to import duties and taxes
levied by the destination country. These are not included in our prices
and are the recipient's responsibility. We cannot predict the amount —
your local customs authority can.

If a parcel is refused at customs and returned to us, we refund the order
value minus outbound and return shipping.

Tracking
You'll receive a tracking link by email once your order ships.

Lost or delayed parcels
If your parcel hasn't arrived [X] business days after the estimated
delivery date, email info@athlesio.at with your order number and we'll
open an investigation with the carrier.
```

**⚠ Check:** the duties paragraph is the single biggest source of chargebacks for EU→US/UK supplement sellers. Consider using Shopify's Duties & Import Taxes at checkout (DDP) so the customer pays up front and there is no surprise. It costs you conversion; it costs you less than refused deliveries.

---

## 3. Returns & Refunds

```
RETURNS

Right of withdrawal (EU/Austria)
As a consumer in the EU you have the right to withdraw from this contract
within 14 days without giving any reason. The withdrawal period expires
14 days from the day you, or a third party you nominate, takes physical
possession of the goods.

To exercise this right, inform us by a clear statement — email
info@athlesio.at, or use the model withdrawal form below. Sending your
notice before the period expires is sufficient.

Effects of withdrawal
We reimburse all payments received from you, including standard delivery
costs, without undue delay and no later than 14 days from the day we are
informed of your decision. We use the same means of payment you used,
unless you expressly agree otherwise; you incur no fees as a result.
We may withhold reimbursement until we have received the goods back or
you have supplied evidence of having sent them, whichever is earlier.

You bear the direct cost of returning the goods.

Important: sealed goods
The right of withdrawal does not apply to sealed goods which are not
suitable for return for health protection or hygiene reasons and which
were unsealed after delivery. Once the safety seal on a jar is broken,
that jar cannot be returned.

United Kingdom
UK customers have equivalent 14-day cancellation rights under the Consumer
Contracts Regulations 2013, with the same hygiene-seal exception.

United States
US customers may return unopened, unsealed jars within 30 days of delivery
for a full refund of the product price. Return shipping is the customer's
responsibility unless the item arrived damaged or incorrect.

Damaged or incorrect items
Email info@athlesio.at within 48 hours of delivery with your order number
and a photo. We'll replace or refund, and we'll cover return postage.

MODEL WITHDRAWAL FORM
To: [Firmenwortlaut], [Adresse], info@athlesio.at
I/We hereby give notice that I/we withdraw from my/our contract of sale
of the following goods:
Ordered on / received on:
Name of consumer(s):
Address of consumer(s):
Signature (only if this form is notified on paper):
Date:
```

**⚠ Check:** the sealed-goods exception is what makes supplements sellable at all — but it only holds if the jar genuinely carries a visible safety seal and the product page says so *before* purchase. Confirm the Zendrop packaging is sealed, and photograph the seal for the product gallery.

---

## 4. Privacy Policy — outline

Because you'll process data of EU, UK and US residents, you're inside GDPR, UK GDPR and (for California buyers) CCPA/CPRA at once. This needs a real lawyer or a maintained generator (Iubenda, Termly); a hand-written version will go stale.

**Must cover:**

- Controller identity and contact (same details as Impressum)
- What you collect: order data, payment data (via Shopify Payments — you don't store card numbers), email, shipping address, IP, cookie/analytics data
- Legal basis for each purpose — contract performance for orders, consent for marketing and non-essential cookies, legitimate interest for fraud prevention
- Processors: Shopify, your payment provider, Zendrop and the fulfilment carrier, your email platform, any analytics
- **International transfers** — Zendrop and US-based processors mean data leaves the EEA. Name the transfer mechanism (SCCs / adequacy).
- Retention periods, including the 7-year Austrian tax retention on invoices
- Data subject rights: access, rectification, erasure, portability, objection, and how to exercise them
- Right to lodge a complaint with the Datenschutzbehörde (AT) / ICO (UK)
- California-specific: right to know, delete, correct, opt out of sale/sharing; a "Do Not Sell or Share My Personal Information" link if applicable

**Cookie banner:** required for EU/UK. Must block non-essential cookies until consent, with reject as easy as accept.

---

## 5. Terms of Service — outline

- Scope, and that these terms govern all orders
- Contract formation: the order is an offer; the contract forms on your order confirmation, not on payment
- Prices including/excluding VAT, currency per market, shipping shown before checkout
- Payment methods and when payment is taken
- Delivery and transfer of risk (risk passes to the consumer on delivery, not on dispatch — this is mandatory for B2C in the EU)
- Retention of title until full payment
- Statutory warranty (Gewährleistung — 2 years in Austria); this cannot be excluded for consumers
- Liability limitations, with the mandatory carve-outs for personal injury and gross negligence
- Governing law: Austrian law, without displacing mandatory consumer protections of the customer's country of residence
- Age requirement: 18+

**⚠ Check:** a term shortening the 2-year Gewährleistung or shifting risk of loss to the consumer during transit is void in B2C and can itself trigger a warning letter. Don't copy a US template.

---

## 6. About Athlesio

```
ABOUT

Athlesio started with a straightforward frustration: creatine is one of
the most researched supplements there is, and almost nobody takes it
consistently. Not because it doesn't work — because a tub of powder and
a shaker are one more thing to carry, wash and remember.

So we went looking for a format that survives contact with a normal week.

Sports nutrition has an honesty problem. In 2025 independent labs tested
creatine gummies from a range of brands and found that many contained a
fraction of what their labels claimed. We'd rather you knew that going in
than found out later. Ask us for our certificate of analysis — ask every
brand you buy from.

Athlesio is run from Austria by Davide Martino. Small operation, no call
centre. If something's wrong with your order, the person who reads the
email is the person who fixes it.

info@athlesio.at
```

**⚠ Check:** only publish the CoA paragraph once you actually hold one. See the compliance roadmap.

---

## 7. Contact

```
CONTACT

Email        info@athlesio.at
Response     within 1 business day, Monday to Friday

For order issues, include your order number — it's in your confirmation
email and starts with #.

[Firmenwortlaut]
[Adresse]
[PLZ Ort], Österreich
```

---

## 8. Shopify setup checklist

**Markets** (Settings → Markets)

- [ ] Keep **Austria / EUR** as primary
- [ ] Add **United Kingdom / GBP** — own price list, own shipping zone
- [ ] Add **United States / USD** — own price list, own shipping zone
- [ ] **Do not add Canada**
- [ ] Set market-specific prices manually. Do not rely on automatic conversion.

**Shipping** (Settings → Shipping and delivery)

- [ ] Zone: Austria
- [ ] Zone: EU
- [ ] Zone: United Kingdom
- [ ] Zone: United States (consider excluding CA until Prop 65 handling is in place)
- [ ] Configure Duties & Import Taxes if going DDP

**Taxes**

- [ ] Austrian VAT on domestic and EU B2C sales
- [ ] OSS registration if EU cross-border sales exceed the €10,000 threshold
- [ ] UK VAT registration — required for consignments **below £135** shipped to UK consumers, from the first sale. There is no threshold for non-UK sellers.
- [ ] US sales tax nexus — economic nexus thresholds vary by state; enable Shopify Tax and review once volume builds

**Legal pages** (Settings → Policies)

- [ ] Refund policy · Privacy policy · Terms of service · Shipping policy · Contact information
- [ ] Impressum as a standard page linked in the footer

**Before launch**

- [ ] Independent certificate of analysis on file
- [ ] Real product photography replacing the Zendrop creatives
- [ ] Test order placed and refunded end to end
- [ ] Backup payment gateway identified
- [ ] Cookie consent banner blocking non-essential cookies by default
