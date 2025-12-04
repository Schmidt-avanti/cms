# Pricing Page Setup Guide

## Overview
Your pricing page has been successfully integrated into the Avanti CMS! This guide will help you set up and manage the pricing page content.

## What Was Created

### 1. Block Types
Four new block types were created for the pricing page:

- **PricingHero**: Main title, subtitle, and CTA button
- **ServicePackages**: Service packages with pricing cards
- **PackageIncludes**: Features included in all packages
- **AdditionalOptions**: Additional options table

### 2. React Components
Corresponding React components were created in `/src/components/blocks/`:

- `PricingHero.tsx`
- `ServicePackages.tsx` 
- `PackageIncludes.tsx`
- `AdditionalOptions.tsx`

### 3. Styling
All pricing page styles were added to `/src/app/(frontend)/avanti-styles.css` including:

- Pricing card layouts
- Animation classes
- Tooltip styles
- Responsive design
- Color scheme matching your brand

## Setting Up the Pricing Page

### Option 1: Using the Seed Script (Recommended)
1. Start your development server:
   ```bash
   npm run dev
   ```

2. Run the seed script:
   ```bash
   node src/seed-pricing.js
   ```

3. The pricing page will be created with all the content from your HTML file.

### Option 2: Manual Setup via Admin Panel
1. Start your development server and go to `/admin`
2. Navigate to "Pages" collection
3. Create a new page with:
   - Title: "Preise - avanti"
   - Slug: "preise"
4. Add the following blocks in order:
   - Navigation
   - Pricing Hero
   - Service Packages
   - Package Includes
   - Additional Options
   - Footer

## Content Management

### Service Packages
Each package includes:
- Name (e.g., "Prepaid", "Value", "Extended", "Super 365")
- Price with prefix/suffix
- Operating hours (weekday/weekend)
- Holiday information
- Optional tooltip for additional information

### Package Features
Features can be either:
- **Feature**: Regular feature with checkmark
- **Separator**: Text separator (e.g., "und", "oder")

### Additional Options
Table format with:
- Option name
- One-time price
- Monthly price
- Footer notes for disclaimers

## Accessing the Page

Once set up, your pricing page will be available at:
- **Development**: `http://localhost:3000/preise`
- **Production**: `https://yourdomain.com/preise`

## Customization

### Styling
All styles are in `/src/app/(frontend)/avanti-styles.css` under the "Pricing Page Styles" section.

### Content
Edit content through the Payload CMS admin panel at `/admin`.

### Components
Modify React components in `/src/components/blocks/` to change functionality.

## Features Included

✅ **Responsive Design**: Works on all device sizes
✅ **Animations**: Smooth fade-in and slide animations
✅ **Tooltips**: Interactive tooltips for additional information
✅ **Calendly Integration**: Demo booking button integration
✅ **Bootstrap Compatible**: Uses existing Bootstrap classes
✅ **Brand Colors**: Matches your existing color scheme
✅ **SEO Friendly**: Proper meta tags and structure

## Troubleshooting

### Page Not Loading
1. Check that the page exists in the admin panel
2. Verify the slug is "preise"
3. Check browser console for errors

### Styling Issues
1. Ensure `/src/app/(frontend)/avanti-styles.css` is properly loaded
2. Check that Bootstrap is loaded in the layout
3. Verify CSS classes match the component structure

### Content Not Updating
1. Clear browser cache
2. Restart the development server
3. Check that changes were saved in the admin panel

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all files were created correctly
3. Ensure the development server is running
4. Check that all dependencies are installed

The pricing page is now fully integrated and ready to use!
