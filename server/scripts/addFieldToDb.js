/**
 * ADD A FIELD TO A DB
 * 
 * Fill out the credentials, thats all you need to do.
 */

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_DB;
const dbName = 'yogatella'; // Replace with your database name
const collectionName = 'teachers'; // Replace with your collection name

async function addFieldToDb() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Update all documents to add a new field
    const result = await collection.updateMany(
      {}, // Match all documents
      { $set: { newField: 'defaultValue' } } // Replace 'newField' and 'defaultValue' as needed
    );

    console.log(`${result.modifiedCount} documents updated with the new field.`);
  } catch (error) {
    console.error('Error updating documents:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

addFieldToDb();