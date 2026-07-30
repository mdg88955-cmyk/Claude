# Pending store changes

Changes that were prepared but **not yet applied to the live store**, because the
Shopify MCP connector dropped mid-session. Apply each one, then delete it from here.

| File | Target | Mutation |
| --- | --- | --- |
| `shipping-page.html` | `/pages/shipping` — `gid://shopify/Page/732980609356` | `pageUpdate(id:, page: { body: ... })` |

## shipping-page.html

**Problem it fixes:** the live page prints literal `[X–Y] business days` for the
United Kingdom and the United States — a placeholder visible to customers.

**Approach:** the two rows are removed and replaced with an honest paragraph. No
delivery numbers were invented. CLAUDE.md §2 forbids publishing figures that cannot
be stood behind, and the real UK/US windows are unknown until a sample order has run
through Zendrop.

**Open question for the owner, worth deciding before launch:** the UK and US markets
are ACTIVE while their delivery times are unknown. Either run the sample order and
publish real numbers, or set those markets back to DRAFT until the numbers exist.
Selling into a market whose delivery time you cannot state is the kind of gap this
brand's positioning cannot afford.

## Already applied this session (no action needed)

- `/pages/about` — removed "Ask us for our certificate of analysis", which implied a
  CoA exists. It does not; it is open item #1 in CLAUDE.md §7. Replaced with a
  statement of where the brand actually stands.
- `/pages/contact` — body was empty; written.
- `main-menu` and `footer` — rebuilt, legal pages linked.
- 301 redirect `/products/muskel-boost-gummies` → `/products/athlesio-creatine-gummies`.
- Product reactivated, published to all 3 publications, added to `frontpage`.
- `sections/main-product.liquid` and `assets/athlesio.js` — product page rebuilt
  (see the commit message for the full list; md5 verified after upload).
