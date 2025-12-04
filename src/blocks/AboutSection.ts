import type { Block } from 'payload';

export const AboutSection: Block = {
  slug: 'aboutSection',
  labels: {
    singular: 'About Section',
    plural: 'About Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Unsere Leistungen',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Mehr Service für Ihre Kunden, mehr Zeit für Sie',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Demo buchen →',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: '#contactSection',
    },
    {
      name: 'teamMember',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
