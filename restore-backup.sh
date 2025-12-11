#!/bin/bash

# Restore your existing backup directly to Atlas
ATLAS_URI="mongodb+srv://imuslu_db_user:Y%23Lx2GvnzhmCX%3F%2F@cluster0.xy6hub3.mongodb.net/avanti-cms?retryWrites=true&w=majority"

echo "🔄 Restoring database backup to Atlas..."

# Use your existing backup folder
mongorestore --uri="$ATLAS_URI" --db=avanti-cms ./database-backup/avanti-cms/

echo "✅ Backup restored! Your entire database is now on Atlas."
