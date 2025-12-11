import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

// 👇 ADD THIS IMPORT
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const isBuildMode =
  process.env.PAYLOAD_DISABLE_DB === 'true' ||
  (process.env.NODE_ENV === 'production' && process.env.VERCEL === '1')

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-key-for-development-only',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: isBuildMode
      ? 'mongodb://localhost:27017/build-placeholder'
      : (process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017/avanti-cms-dev'),
    connectOptions: isBuildMode
      ? {
          serverSelectionTimeoutMS: 1000,
          socketTimeoutMS: 1000,
        }
      : undefined,
  }),
  sharp,

  // 👇 REPLACE YOUR plugins: [] WITH THIS:
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true, // MUST match your collection slug!
      },
      token: process.env.BLOB_READ_WRITE_TOKEN, // already added in Vercel
      clientUploads: true, // required for Vercel to avoid 4.5MB limit
    }),
  ],
})
