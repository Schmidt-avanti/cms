import type { Block } from 'payload';

export const PricingHero: Block = {
  slug: 'pricingHero',
  labels: {
    singular: 'Pricing Hero',
    plural: 'Pricing Heroes',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Service-Pakete',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Die Service-Pakete unterscheiden sich durch unterschiedliche Öffnungszeiten',
    },
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
    {
      name: 'onboardingPrice',
      type: 'text',
      defaultValue: 'Einmalige Onboarding-Gebühr 2.450€',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Demo buchen →',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: 'javascript:void(0);',
    },
  ],
};
