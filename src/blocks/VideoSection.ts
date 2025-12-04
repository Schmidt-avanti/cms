import type { Block } from 'payload';

export const VideoSection: Block = {
  slug: 'videoSection',
  labels: {
    singular: 'Video Section',
    plural: 'Video Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Wie funktioniert avanti?',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Für mehr Information Video ansehen',
    },
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Video file (MP4 format recommended)',
      },
    },
    {
      name: 'videoPoster',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Video poster/thumbnail image',
      },
    },
    {
      name: 'playButtonIcon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Custom play button icon (optional)',
      },
    },
  ],
};
