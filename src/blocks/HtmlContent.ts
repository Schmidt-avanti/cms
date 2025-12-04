import type { Block } from 'payload';

export const HtmlContent: Block = {
  slug: 'htmlContent',
  labels: {
    singular: 'HTML Content',
    plural: 'HTML Content Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Optional title for this HTML block (for admin purposes)',
      },
    },
    {
      name: 'htmlContent',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Paste your existing HTML content here (do not include <html>, <head>, or <body> tags)',
        rows: 10,
      },
    },
    {
      name: 'customCss',
      type: 'textarea',
      admin: {
        description: 'Optional custom CSS for this block',
        rows: 5,
      },
    },
    {
      name: 'customJs',
      type: 'textarea',
      admin: {
        description: 'Optional custom JavaScript for this block',
        rows: 5,
      },
    },
  ],
};
