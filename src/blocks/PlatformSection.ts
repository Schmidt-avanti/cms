import type { Block } from 'payload';

export const PlatformSection: Block = {
  slug: 'platformSection',
  labels: {
    singular: 'Platform Section',
    plural: 'Platform Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'avanti kennenlernen',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Die avanti-Kundenservice-Plattform',
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
