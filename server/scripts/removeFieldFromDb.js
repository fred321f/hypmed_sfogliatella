const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const dbName = 'yogatella'; // Replace with your database name
const collectionName = 'seminars'; // Replace with your collection name

async function removeFieldFromDb() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Update all documents to remove a field
    const result = await collection.updateMany(
      {}, // Match all documents
      { $unset: { newField: '' } } // Replace 'newField' with the field name to remove
    );

    console.log(`${result.modifiedCount} documents updated to remove the field.`);
  } catch (error) {
    console.error('Error updating documents:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

removeFieldFromDb();