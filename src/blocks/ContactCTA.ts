import type { Block } from 'payload';

export const ContactCTA: Block = {
  slug: 'contactCta',
  labels: {
    singular: 'Contact CTA Section',
    plural: 'Contact CTA Sections',
  },
  fields: [
    { name: 'headline', type: 'text', required: true },
    { name: 'subheadline', type: 'textarea' },
    {
      name: 'buttonLabel',
      type: 'text',
    },
    {
      name: 'buttonUrl',
      type: 'text',
    },
  ],
};
