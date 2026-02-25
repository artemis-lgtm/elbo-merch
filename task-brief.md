# Elbo Room Merch Tracker — Task Brief

## What
Build a mobile-first web app for tracking merchandise inventory at The Elbo Room bar (cash-only bar in Fort Lauderdale). Managers need to log sales, receive inventory, and see P&L.

## Requirements

### Core Features
1. **Product catalog** with all SKUs pre-loaded (see inventory data below)
2. **Quick sale logging**: Tap product → select size → "Sold" (full price), "Discount" (enter amount), or "Comped"
3. **Receive inventory**: Log new stock arrivals by product/size/quantity
4. **Real-time stock levels**: Current count per product per size
5. **Manager PIN login**: Simple 4-digit PIN per manager (Austin, Adam, Elyse + others TBD)
6. **Activity log**: Who did what, when (every transaction logged with manager name + timestamp)
7. **Dashboard/Reports**: 
   - Current stock levels (office + storage unit)
   - Total sold / revenue by product, by month
   - Shrinkage tracking (expected vs actual inventory)
   - P&L by month and YTD
8. **Monthly inventory count mode**: First of every month, managers do a physical count. App should have a "Count Mode" where they go through each item and enter actual counts, then flag discrepancies.

### Technical
- **Single HTML file** with embedded CSS/JS (no build tools, no framework)
- **Backend**: Google Sheets as database (use Sheets API via a simple Apps Script web app for CRUD)
  - OR: Use localStorage + JSON export/import if Sheets integration is too complex for a single file
  - Priority: GET IT WORKING. Can upgrade backend later.
- **Mobile-first**: Must work great on iPhone Safari. Big tap targets, fast.
- **Host**: Will be served from Mac mini on Tailscale (simple HTTP server)
- **No npm, no node, no build step**. Just an HTML file.

### Design
- Dark theme matching the Elbo Room vibe (dark bg, neon accents — think dive bar)
- Big buttons, easy to use with one hand behind a bar
- Categories: T-Shirts, Hoodies, Crop Tops, Hats, Jerseys
- Two locations: "Office" (behind bar) and "Storage Unit"

## Inventory Data (pre-load all of this)

### T-SHIRTS (Office)

**St Patrick's Day Green** — S:13, M:16, L:1, XL:11, XXL:6
**Black Neon** — S:250, XL:75, XXL:120, XXXL:51
**Blue (Pink Logo)** — S:2, L:1, XL:24, XXL:14, XXXL:25
**Teal Fishing** — XS:4, S:5, L:1, XL:58, XXL:3, XXXL:4
**Blue Fishing** — S:20, M:12, XL:12, XXL:2, XXXL:1
**Grey Fishing** — XS:6, S:10, M:22, L:3, XL:6, XXXL:4
**New Green Long Sleeve** — M:16, L:12, XXL:18, XXXL:3
**Teal Ladies Crop Top** — S:10, M:16, L:15, XL:27
**Tkachuk Red** — S:60, M:19, L:12, XL:12, XXL:23
**Black (Old Logo)** — S:20, L:1 *(discontinued — stopped selling 3-4 yrs ago)*
**Red White Blue** — S:19, M:33, XL:7, XXL:1

### HOODIES (Office)

**Black Neon Hoodie** — S:10, M:20, XXL:6
**Tan Hoodie** — S:28, M:15, L:11
**White Zip Up (Old)** — XS:1, M:6, L:17
**Red Zip (Old)** — L:13, 4XL:2
**Red Elbo/Panthers Jersey Hoodie** — M:1, XL:1, XXL:1, 3XL:2

### CROP TOPS (Office)

**Light Blue Crop** — M:24, L:12, XL:8
**Light Green Crop** — M:6, L:15, XL:15
**Coral Crop** — M:7, L:16, XL:20
**Mermaid Black Crop** — S:2, M:10, L:14, XL:9, 2XL:2
**Mermaid White** — S:9, M:1, L:3, XL:4, 2XL:1
**Diamond Crop Green** — M:6, L:15, XL:15
**Diamond Crop Coral** — M:7, L:16, XL:20
**Diamond Crop Blue** — M:24, L:12, XL:8
**Diamond Crop Black** — M:3, L:9, XL:17

### HATS (Office)

**Camo** — 187
**Yellow Palm** — 175
**Blue Palm** — 196
**Upside Down Logo Black** — 188
**Upside Down Logo White** — 254
**Red White Blue** — 94
**Elbo Suede** — 7
**Blue w/ Red Elbo Patch** — 56
**Black & Off White Bold ElboRoom** — 21
**Black & White w/ Camo** — 77
**Drinking Club Green** — 30
**Drinking Club Burgundy** — 0

### JERSEYS (Office)

**Bills/Elbo Room Jersey** — S:72, M:72, XXL:28
**Blue Zip Old Logo** — XS:4, 4XL:3
**White Black Red 90s Logo** — S:11, XXXL:2
**Comfort Color LS Coral** — S:2, 2XL:8
**Comfort Color LS Sea Foam Green** — 2XL:6

### STORAGE UNIT

**Hats:**
- Drinking Club Green: 10
- Black White Camo: 143
- Red White: 45
- Blue w/ Red Elbo Patch: 148
- Black Bold ElboRoom: 198
- Yellow Palm: 220
- Blue Palm: 211
- Camo: 216
- Suede: 1310
- Upside Down Logo Black: 490
- Upside Down Logo White: 497

**Shirts:**
- Camo S:29
- Light Green S:30, M:36, L:12, XL:12, XXL:48, XXXL:12
- Neon S:6, M:50, L:57, XL:75, XXL:109
- Red Tkachuk S:8, M:3, XXL:12, XXXL:10

**Hoodies:**
- Elbo/Panthers Hoodie M:9, L:10, XL:7, XXL:73
- Tan S:43, M:26, XL:6
- Neon S:6, M:25, XL:4, XXL:77

**Jerseys:**
- Bills Elbo Jersey XXL:47

## Operational Notes (from Austin)
- Post inventory count on board upstairs
- Adam marks inventory taken upstairs for cabinets
- Elyse marks register punches on P&L
- Itemized accounting first of every month
- Cut down inventory to top sellers for 80% of supply (including sizing)
- New merch ideas: Cropped hoodies, bring back bikinis for summer
- Don't need plastic bins, keep inventory in cardboard boxes

## Output
Single file: `projects/elbo-merch/index.html`
Must be fully functional on first load. Pre-loaded with all inventory data above.
