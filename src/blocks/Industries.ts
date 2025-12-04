import type { Block } from 'payload';

export const Industries: Block = {
  slug: 'industries',
  labels: {
    singular: 'Industries Section',
    plural: 'Industries Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'Unsere Branchen',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'avanti unterstützt kleinere und mittlere Unternehmen',
    },
    {
      name: 'industries',
      type: 'array',
      required: true,
      fields: [
        { 
          name: 'name', 
          type: 'text', 
          required: true 
        },
        {
          name: 'materialIcon',
          type: 'text',
          required: true,
          admin: {
            description: 'Material Symbols icon name (e.g., "home_work", "storefront")',
          },
        },
      ],
    },
  ],
};