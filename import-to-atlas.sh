#!/bin/bash

echo "🔄 Importing local database to MongoDB Atlas..."
echo "================================================"
echo ""

# Check if backup exists
if [ ! -d "./database-backup/avanti-cms" ]; then
    echo "❌ Error: Database backup not found!"
    echo "Please run the export command first:"
    echo "mongodump --db avanti-cms --out ./database-backup"
    exit 1
fi

echo "📁 Found database backup with the following collections:"
ls -la ./database-backup/avanti-cms/

echo ""
echo "🔗 Please replace YOUR_ATLAS_CONNECTION_STRING with your actual Atlas connection string"
echo "Example connection string format:"
echo "mongodb+srv://username:password@cluster.mongodb.net/avanti-cms?retryWrites=true&w=majority"
echo ""
echo "Run this command with your actual connection string:"
echo ""
echo "mongorestore --uri 'YOUR_ATLAS_CONNECTION_STRING' ./database-backup/avanti-cms --db avanti-cms"
echo ""
echo "After import, test with:"
echo "mongosh 'YOUR_ATLAS_CONNECTION_STRING' --eval 'db.pages.find().count()'"
