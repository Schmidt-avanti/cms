import type { Block } from 'payload';

export const AvantiHero: Block = {
  slug: 'avantiHero',
  labels: {
    singular: 'Avanti Hero Section',
    plural: 'Avanti Hero Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Für kleinere und mittlere Unternehmen',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'Wir entlasten Sie bei Ihrem Kundenservice',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'avanti übernimmt alle Routineaufgaben bei Ihrer telefonischen und schriftlichen Kundenbetreuung. Menschlich, effizient, professionell. So können Sie sich auf das Wesentliche konzentrieren: die Entwicklung Ihres Geschäfts.',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Erstgespräch anfragen',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: '#contactSection',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
