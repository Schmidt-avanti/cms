import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media', // 👈 must be "media"
  access: {
    read: () => true, // optional but handy so frontend can see images
  },
  upload: {
    // IMPORTANT: no staticDir/staticURL here on Vercel
    mimeTypes: ['image/*'], // or ['image/*', 'video/*'] etc.
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
}
