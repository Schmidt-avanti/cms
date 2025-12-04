# Quick Fix for Pricing Page

## The Problem
The pricing cards are not showing because the page hasn't been created in the CMS yet, or the data structure is incorrect.

## Quick Solution

### Step 1: Access the Admin Panel
1. Make sure your development server is running: `npm run dev`
2. Go to `http://localhost:3000/admin`
3. Log in to the admin panel

### Step 2: Create the Pricing Page
1. Click on "Pages" in the left sidebar
2. Click "Create New" button
3. Fill in the page details:
   - **Title**: `Preise - avanti`
   - **Slug**: `preise`

### Step 3: Add the Blocks
Add these blocks in order by clicking "Add Block":

#### 1. Navigation Block
- Add your navigation items

#### 2. Pricing Hero Block
- **Title**: `Service-Pakete`
- **Subtitle**: `Die Service-Pakete unterscheiden sich durch unterschiedliche Öffnungszeiten`

**Packages Section** - Click "Add Package" 4 times and fill in:

**Package 1 - Prepaid:**
- Name: `Prepaid`
- Price: `850€`
- Price Prefix: `Ab`
- Price Suffix: `/Monat`
- Weekday Hours: `Montag bis Freitag`
- Weekday Time: `09:00 bis 17:30 Uhr`
- Holiday Info: `An bundeseinheitlichen Feiertagen geschlossen`
- Has Tooltip: ✓ (checked)
- Tooltip: `*Sie zahlen 2.550 € (entspricht 3 × 850 €) im Voraus für drei Monate per Kreditkarte. Wenn Sie mehr als 1.000 Minuten im Monat brauchen, wird automatisch ein zusätzliches Guthaben (in 100 €-Schritten) nachgeladen.`

**Package 2 - Value:**
- Name: `Value`
- Price: `950€`
- Price Prefix: `Ab`
- Price Suffix: `/Monat`
- Weekday Hours: `Montag bis Freitag`
- Weekday Time: `09:00 bis 17:30 Uhr`
- Holiday Info: `An bundeseinheitlichen Feiertagen geschlossen`
- Has Tooltip: ✗ (unchecked)

**Package 3 - Extended:**
- Name: `Extended`
- Price: `1.250€`
- Price Prefix: `Ab`
- Price Suffix: `/Monat`
- Weekday Hours: `Montag bis Freitag`
- Weekday Time: `08:00 bis 20:00 Uhr`
- Weekend Hours: `Samstag`
- Weekend Time: `10:00 bis 18:00 Uhr`
- Holiday Info: `An bundeseinheitlichen Feiertagen geschlossen`
- Has Tooltip: ✗ (unchecked)

**Package 4 - Super 365:**
- Name: `Super 365`
- Price: `1.950€`
- Price Prefix: `Ab`
- Price Suffix: `/Monat`
- Weekday Hours: `Montag bis Sonntag`
- Weekday Time: `08:00 bis 20:00 Uhr`
- Holiday Info: `An Feiertagen geöffnet`
- Has Tooltip: ✗ (unchecked)

**Then add the remaining fields:**
- **Onboarding Price**: `Einmalige Onboarding-Gebühr 2.450€`
- **CTA Text**: `Demo buchen →`
- **CTA URL**: `javascript:void(0);`

#### 3. Package Includes Block
- **Title**: `Alle Pakete enthalten:`

Add Features:
1. **Feature**: `Vollen Zugang zur avanti-Plattform mit allen Funktionalitäten`
2. **Separator**: `und`
3. **Feature**: `1.000 Minuten für Inbound-Anrufe und Rückrufe, Schrift- und Backoffice-Bearbeitung auf Deutsch und Englisch. Zusätzliche Minuten werden mit 0,75€ abgerechnet.`
4. **Separator**: `oder`
5. **Feature**: `20 Stunden für Outbound-Kampagnen auf Deutsch und Englisch. Zusätzliche Stunden werden mit 25€ abgerechnet.`

#### 4. Additional Options Block
- **Title**: `Zusatz - Optionen`
- **Subtitle**: `Diese Zusatzoptionen können mit den Service-Paketen kombiniert werden`

Add Options:
1. Option: `24/7-Service*`, One-time: `/`, Monthly: `2.850€`
2. Option: `WhatsApp, Chat, Forms`, One-time: `250€`, Monthly: `/`
3. Option: `Chat-/Voice-BOT`, One-time: `1.850€`, Monthly: `250€`
4. Option: `Postadresse in Berlin Mitte`, One-time: `250€`, Monthly: `250€`
5. Option: `CH-Paket** (CH-DE, FR, IT)`, One-time: `/`, Monthly: `500€`
6. Option: `Einbindung von Fremd-Tools`, One-time: `Nach Aufwand`, Monthly: `150€`

Add Footer Notes:
1. `Alle Preise zzgl. gesetzlicher Mehrwertsteuer`
2. `*in Verbindung mit "Super 365"`
3. `**Schweizerdeutsch, Deutsch, Französisch, Italienisch`

#### 5. Footer Block
- Add your footer content

### Step 4: Save and View
1. Click "Save" at the top
2. Go to `http://localhost:3000/preise` to see your pricing page

## Alternative: Use the Seed Script
If you prefer to use the seed script:

1. Run: `node src/seed-pricing.js`
2. This will automatically create the page with all the content

## Troubleshooting
- If the page still doesn't show pricing cards, check the browser console for errors
- Make sure all blocks are saved properly
- Verify the slug is exactly `preise`
- Check that the development server is running

The pricing cards should now appear exactly like in your original HTML!
