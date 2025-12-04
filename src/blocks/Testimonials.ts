import type { Block } from 'payload';

export const Testimonials: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Was avanti-Auftraggeber über uns sagen',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      fields: [
        { 
          name: 'name', 
          type: 'text', 
          required: true 
        },
        { 
          name: 'company', 
          type: 'text',
          required: true,
        },
        { 
          name: 'position', 
          type: 'text' 
        },
        { 
          name: 'quote', 
          type: 'textarea', 
          required: true 
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Portrait image of the person giving the testimonial',
          },
        },
      ],
    },
  ],
};