import type { Block } from 'payload';

export const ServicePackages: Block = {
  slug: 'servicePackages',
  labels: {
    singular: 'Service Packages',
    plural: 'Service Packages',
  },
  fields: [
    {
      name: 'packages',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          name: 'pricePrefix',
          type: 'text',
          defaultValue: 'Ab',
        },
        {
          name: 'priceSuffix',
          type: 'text',
          defaultValue: '/Monat',
        },
        {
          name: 'weekdayHours',
          type: 'text',
          required: true,
        },
        {
          name: 'weekdayTime',
          type: 'text',
          required: true,
        },
        {
          name: 'weekendHours',
          type: 'text',
        },
        {
          name: 'weekendTime',
          type: 'text',
        },
        {
          name: 'holidayInfo',
          type: 'text',
          required: true,
        },
        {
          name: 'tooltip',
          type: 'textarea',
        },
        {
          name: 'hasTooltip',
          type: 'checkbox',
          defaultValue: false,
        },
      ],
    },
  ],
};
