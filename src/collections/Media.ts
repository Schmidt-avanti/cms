import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',            // 👈 must be "media" to match your config
  upload: {
    // don't use staticDir or local file paths on Vercel
    mimeTypes: ['image/*'], // optional: allow images only
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
}
