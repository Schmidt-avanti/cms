// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Check if we're in build mode (no database connection needed)
// Only respect the explicit PAYLOAD_DISABLE_DB flag (set in build script),
// so that runtime on Vercel still initializes the database.
const isBuildMode = process.env.PAYLOAD_DISABLE_DB === 'true'

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
  db: (isBuildMode
    ? undefined
    : postgresAdapter({
        pool: {
          connectionString:
            process.env.DATABASE_URI ||
            'postgres://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require',
          ssl: { rejectUnauthorized: false },
        },
      })) as any,
  sharp,
  plugins: [],
})
