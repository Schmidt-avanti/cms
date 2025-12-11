# Supabase Migration Guide

## ✅ Configuration Complete

Your Payload CMS has been successfully configured to use Supabase (PostgreSQL) instead of MongoDB.

## Changes Made

1. **Dependencies Updated:**
   - Removed: `@payloadcms/db-mongodb`
   - Added: `@payloadcms/db-postgres`

2. **Configuration Updated:**
   - Updated `payload.config.ts` to use `postgresAdapter`
   - Updated environment variable references

## 🚨 CRITICAL: Required Environment Variables in Vercel

**Your build is failing because the DATABASE_URL is not set in Vercel!**

You MUST add this environment variable in your Vercel dashboard:

```
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

### How to Add Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Click on **Settings** tab
3. Click on **Environment Variables** in the sidebar
4. Add a new variable:
   - **Name**: `DATABASE_URL`
   - **Value**: Your Supabase connection string
   - **Environment**: Production, Preview, Development (select all)
5. Click **Save**
6. **Redeploy** your project

## Getting Your Supabase Connection String

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **Database**
3. Scroll down to **Connection string**
4. Copy the **URI** format connection string
5. Replace `[YOUR-PASSWORD]` with your database password

## Next Steps

1. **Update Vercel Environment Variables:**
   - Add `DATABASE_URL` or `POSTGRES_URL` with your Supabase connection string
   - Keep your existing `PAYLOAD_SECRET` and `BLOB_READ_WRITE_TOKEN`

2. **Deploy and Test:**
   - Deploy your updated configuration to Vercel
   - The database tables will be automatically created by Payload on first run

3. **Recreate Your Pages:**
   - Since you lost your pages when the database changed, you'll need to recreate them
   - The Pages collection structure remains the same, just with a new database backend

## Troubleshooting

- If you get connection errors, verify your Supabase connection string is correct
- Make sure your Supabase project allows connections from Vercel's IP ranges
- Check that your database password doesn't contain special characters that need URL encoding

## Benefits of This Migration

- **Better Performance:** PostgreSQL typically performs better than MongoDB for CMS use cases
- **Vercel Integration:** Better integration with Vercel's infrastructure
- **Data Recovery:** Your colleague's database change won't affect your Supabase database
- **Scalability:** Supabase provides better scaling options
