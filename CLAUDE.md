# Elbo Merch — Project Rules (scar-backed)

## THE BIG ONE — Firebase is the source of truth, not `index.html`

**The `INIT_INVENTORY` constant in `index.html` is a ONE-TIME SEED.** Once Firebase is populated, the app reads live from `https://elbo-merch-default-rtdb.firebaseio.com/inventory` and ignores the HTML constant forever.

Editing `INIT_INVENTORY` alone will NOT change what shows on the site. This has been done wrong at least twice now (2026-03-xx, 2026-04-23).

**When Austin says "add item X to inventory":**
1. Edit `INIT_INVENTORY` in `index.html` — yes, for future fresh-setup / reference.
2. Also **write directly to Firebase Realtime DB** — this is what actually makes it appear.
3. Verify via curl GET before reporting done.

### Firebase access needs a sign-in token (DB locked 2026-10-29)
Rules live in `database.rules.json` (published in the console as artemis@higneyintl.com, Owner, browser profile /u/4).
Anonymous reads/writes get 401. Signed-in devices can read everything and write inventory/customCosts/yearly-summaries;
sales and transfers are append-only (only voided/voidedBy/voidedAt can be added to an existing sale); no root writes.
The web apiKey is `AIzaSyDjxmNd9JXcsnlJQ2j3zaypLV-W2bpOsxU` (the old one in index.html was mistyped and invalid).
```bash
T=$(curl -s -X POST "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjxmNd9JXcsnlJQ2j3zaypLV-W2bpOsxU" \
  -H 'Content-Type: application/json' -d '{"returnSecureToken":true}' | python3 -c "import sys,json;print(json.load(sys.stdin)['idToken'])")
curl -s -X PUT "https://elbo-merch-default-rtdb.firebaseio.com/inventory/<item-key>.json?auth=$T" \
  -H "Content-Type: application/json" \
  -d '{"name":"...","type":"...","location":"storage|office","costKey":"...","sizes":{"S":N,"M":N,...}}'
```

### Firebase verify:
```bash
curl -s "https://elbo-merch-default-rtdb.firebaseio.com/inventory/<item-key>.json?auth=$T"
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
