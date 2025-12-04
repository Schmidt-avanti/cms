import type { Block } from 'payload';

export const Navigation: Block = {
  slug: 'navigation',
  labels: {
    singular: 'Navigation',
    plural: 'Navigations',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'awardBadge',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Award badge image (optional)',
      },
    },
    {
      name: 'tooltip',
      type: 'textarea',
      admin: {
        description: 'Tooltip text for the logo/award',
      },
    },
    {
      name: 'menuItems',
      type: 'array',
      required: true,
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
      name: 'phoneNumber',
      type: 'text',
      defaultValue: '+49 (0)30 / 814 892-121',
    },
    {
      name: 'phoneUrl',
      type: 'text',
      defaultValue: 'tel:+49(0)30/814892-121',
    },
  ],
};
