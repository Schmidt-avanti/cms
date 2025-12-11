#!/bin/bash

# Quick import script for MongoDB Atlas
# Replace YOUR_ATLAS_CONNECTION_STRING with your actual connection string

ATLAS_URI="mongodb+srv://imuslu_db_user:Y%23Lx2GvnzhmCX%3F%2F@cluster0.xy6hub3.mongodb.net/avanti-cms?retryWrites=true&w=majority"

echo "🚀 Starting quick import to Atlas..."

# Import all collections at once
echo "📄 Importing pages..."
mongoimport --uri="$ATLAS_URI" --collection=pages --file=pages.json --jsonArray

echo "👤 Importing users..."
mongoimport --uri="$ATLAS_URI" --collection=users --file=users.json --jsonArray

echo "🖼️ Importing media..."
mongoimport --uri="$ATLAS_URI" --collection=media --file=media.json --jsonArray

echo "✅ Import complete! Your database is ready."
echo "🔗 Now update Vercel environment variables:"
echo "   DATABASE_URI=$ATLAS_URI"
