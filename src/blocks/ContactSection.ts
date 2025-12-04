import type { Block } from 'payload';

export const ContactSection: Block = {
  slug: 'contactSection',
  labels: {
    singular: 'Contact Section',
    plural: 'Contact Sections',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'avanti kennenlernen',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Jetzt zum Erstgespräch anmelden',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Der Service von avanti ist vielfältig. Lassen Sie uns in einem Gespräch klären, was wir für Sie tun können. Sie werden staunen, wie viel Ihnen die Zusammenarbeit bringt (und wie wenig es kostet).',
    },
    {
      name: 'phone',
      type: 'text',
      defaultValue: '+49 (0)30 / 814 892-121',
    },
    {
      name: 'formTitle',
      type: 'text',
      defaultValue: 'Ja, ich interessiere mich für ein Erstgespräch.',
    },
    {
      name: 'teamMember',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
