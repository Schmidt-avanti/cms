import type { Block } from 'payload';

export const TestimonialsGrid: Block = {
  slug: 'testimonialsGrid',
  labels: {
    singular: 'Testimonials Grid',
    plural: 'Testimonials Grids',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Was avanti-Auftraggeber über uns sagen',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imageClass',
          type: 'text',
          admin: {
            description: 'CSS class for image positioning (e.g., "face-down")',
          },
        },
      ],
    },
  ],
};
