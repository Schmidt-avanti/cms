import type { Block } from 'payload';

export const AdditionalServices: Block = {
  slug: 'additionalServices',
  labels: {
    singular: 'Additional Services',
    plural: 'Additional Services',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Weitere Serviceleistungen',
    },
    {
      name: 'services',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'textarea',
          required: true,
          admin: {
            description: 'SVG icon code',
          },
        },
      ],
    },
  ],
};
