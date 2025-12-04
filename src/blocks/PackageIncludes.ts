import type { Block } from 'payload';

export const PackageIncludes: Block = {
  slug: 'packageIncludes',
  labels: {
    singular: 'Package Includes',
    plural: 'Package Includes',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Alle Pakete enthalten:',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Feature',
              value: 'feature',
            },
            {
              label: 'Separator',
              value: 'separator',
            },
          ],
          defaultValue: 'feature',
        },
        {
          name: 'separatorText',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData?.type === 'separator',
          },
        },
      ],
    },
  ],
};
