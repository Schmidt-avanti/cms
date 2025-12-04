import { getPayload } from 'payload';
import config from './payload.config.js';
import fs from 'fs';
import path from 'path';

async function seedPricingPage() {
  try {
    const payloadConfig = await config;
    const payload = await getPayload({ config: payloadConfig });

    // Read the pricing page data
    const pricingData = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'src/seed-pricing-page.json'), 'utf8')
    );

    console.log('Creating pricing page...');

    // Check if pricing page already exists
    const existingPages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'preise',
        },
      },
    });

    if (existingPages.docs.length > 0) {
      console.log('Pricing page already exists, updating...');
      await payload.update({
        collection: 'pages',
        id: existingPages.docs[0].id,
        data: pricingData,
      });
    } else {
      console.log('Creating new pricing page...');
      await payload.create({
        collection: 'pages',
        data: pricingData,
      });
    }

    console.log('Pricing page created/updated successfully!');
    console.log('You can now access it at: /preise');
    
  } catch (error) {
    console.error('Error seeding pricing page:', error);
  }
}

// Run the seed function if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedPricingPage();
}

export { seedPricingPage };
