#!/bin/bash

echo "🧪 Testing Atlas Connection..."
echo "==============================="
echo ""

if [ -z "$1" ]; then
    echo "❌ Please provide your Atlas connection string as an argument"
    echo ""
    echo "Usage: ./test-atlas.sh 'mongodb+srv://username:password@cluster.mongodb.net/avanti-cms?retryWrites=true&w=majority'"
    echo ""
    exit 1
fi

ATLAS_URI="$1"

echo "🔗 Testing connection to Atlas..."
mongosh "$ATLAS_URI" --eval "
    console.log('✅ Connected to Atlas!');
    console.log('📊 Database stats:');
    console.log('Pages count:', db.pages.find().count());
    console.log('Media count:', db.media.find().count());
    console.log('Users count:', db.users.find().count());
    console.log('');
    console.log('📄 Page titles:');
    db.pages.find({}, {title: 1, slug: 1}).forEach(page => {
        console.log('- ' + page.title + ' (/' + page.slug + ')');
    });
"

echo ""
echo "✅ If you see your pages above, the migration was successful!"
