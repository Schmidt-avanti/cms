import type { Block } from 'payload';

export const SimpleText: Block = {
  slug: 'simpleText',
  labels: {
    singular: 'Simple Text',
    plural: 'Simple Text Blocks',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
  ],
};
