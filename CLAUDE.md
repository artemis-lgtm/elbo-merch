# Elbo Merch — Project Rules (scar-backed)

## THE BIG ONE — Firebase is the source of truth, not `index.html`

**The `INIT_INVENTORY` constant in `index.html` is a ONE-TIME SEED.** Once Firebase is populated, the app reads live from `https://elbo-merch-default-rtdb.firebaseio.com/inventory` and ignores the HTML constant forever.

Editing `INIT_INVENTORY` alone will NOT change what shows on the site. This has been done wrong at least twice now (2026-03-xx, 2026-04-23).

**When Austin says "add item X to inventory":**
1. Edit `INIT_INVENTORY` in `index.html` — yes, for future fresh-setup / reference.
2. Also **write directly to Firebase Realtime DB** — this is what actually makes it appear.
3. Verify via curl GET before reporting done.

### Firebase write (no auth required, DB is public-read/write per rules):
```bash
curl -s -X PUT "https://elbo-merch-default-rtdb.firebaseio.com/inventory/<item-key>.json" \
  -H "Content-Type: application/json" \
  -d '{"name":"...","type":"...","location":"storage|office","costKey":"...","sizes":{"S":N,"M":N,...}}'
```

### Firebase verify:
```bash
curl -s "https://elbo-merch-default-rtdb.firebaseio.com/inventory/<item-key>.json"
```

## Other project facts
- **Sales records are immutable.** Never modify, delete, or rearrange sales entries in Firebase. (2026-02-26 rule from Austin.)
- **Dashboard never filters all-time totals.** Date filters only on sub-views.
- **New item type?** Update three things together: `PRICING` object, the Add and Edit `<select>` options in HTML, and the Firebase write. New types still need the HTML edit because `PRICING[type].retail` drives runtime behavior.
- **Cost key?** Add to the `COST` object in HTML if the item has non-default cost. Default is $12.
- **Item-key naming:** `sto-*` for storage, plain key for office. Kebab-case.
- **Size order:** XS → S → M → L → XL → XXL → XXXL → XXXXL → OS.

## Pre-flight before ANY edit here
Read this file. Ask: does my change affect what the running site shows, or only what a fresh setup would see? If the former, Firebase write is required.
