# Vercel Environment Variables Setup

## 1. Go to Vercel Dashboard
- Visit: https://vercel.com/dashboard
- Select your `avanti-cms` project

## 2. Navigate to Settings
- Click on your project
- Go to **Settings** tab
- Click **Environment Variables** in the left sidebar

## 3. Add/Update Environment Variables

### DATABASE_URI
- **Name**: `DATABASE_URI`
- **Value**: `mongodb+srv://username:password@cluster.mongodb.net/avanti-cms?retryWrites=true&w=majority`
- **Environment**: Production, Preview, Development (check all)

### PAYLOAD_SECRET
- **Name**: `PAYLOAD_SECRET`
- **Value**: `your-secure-secret-key-here-minimum-32-characters`
- **Environment**: Production, Preview, Development (check all)

## 4. Save and Redeploy
- Click **Save**
- Go to **Deployments** tab
- Click **Redeploy** on the latest deployment
- Or push a new commit to trigger deployment

## 5. Verify Deployment
- Visit your Vercel app URL
- Go to `/admin` to access the admin panel
- Check if your 2 pages are visible
