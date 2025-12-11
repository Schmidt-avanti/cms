// MongoDB Atlas Import Script
// This script will help import your local data to Atlas

// First, let's check if we can connect
print("🔗 Testing Atlas connection...");

// Switch to avanti-cms database
use('avanti-cms');

// Check current collections
print("📊 Current collections in Atlas:");
db.runCommand("listCollections").cursor.firstBatch.forEach(
  function(collection) {
    print("- " + collection.name);
  }
);

// Check if pages exist
print("📄 Current pages count:", db.pages.countDocuments());

print("✅ Connection successful!");
print("Now you can import your data using mongoimport or mongorestore");
