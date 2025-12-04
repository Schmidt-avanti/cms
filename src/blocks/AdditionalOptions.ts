import type { Block } from 'payload';

export const AdditionalOptions: Block = {
  slug: 'additionalOptions',
  labels: {
    singular: 'Additional Options',
    plural: 'Additional Options',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Zusatz - Optionen',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Diese Zusatzoptionen können mit den Service-Paketen kombiniert werden',
    },
    {
      name: 'options',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'option',
          type: 'text',
          required: true,
        },
        {
          name: 'oneTimePrice',
          type: 'text',
        },
        {
          name: 'monthlyPrice',
          type: 'text',
        },
      ],
    },
    {
      name: 'footerNotes',
      type: 'array',
      fields: [
        {
          name: 'note',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
