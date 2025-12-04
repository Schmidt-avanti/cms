import type { Block } from 'payload';

export const LogoMarquee: Block = {
  slug: 'logoMarquee',
  labels: {
    singular: 'Logo Marquee',
    plural: 'Logo Marquees',
  },
  fields: [
    {
      name: 'logos',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'logo',
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
