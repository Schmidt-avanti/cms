import type { Block } from 'payload';

export const Footer: Block = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'socialMedia',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'awards',
      type: 'array',
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
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'companyName',
          type: 'text',
          defaultValue: 'avanti.cx GmbH',
        },
        {
          name: 'address',
          type: 'textarea',
          defaultValue: 'Singerstraße 109\n10179 Berlin',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '+49 (0)30 / 814 892-121',
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'info@avanti.cx',
        },
      ],
    },
    {
      name: 'legalLinks',
      type: 'array',
      defaultValue: [
        {
          label: 'Impressum',
          url: '/impressum',
        },
        {
          label: 'Datenschutz',
          url: '/datenschutz',
        },
      ],
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© 2025 avanti – Ihr Service-Partner für zufriedene Kunden. All Rights Reserved.',
    },
  ],
};
