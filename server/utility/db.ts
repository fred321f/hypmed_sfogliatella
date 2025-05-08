import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_DB;
if (!uri) throw new Error('MONGO_DB is missing in .env');

const client = new MongoClient(uri);
let db: any; // Store the database instance

export async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db('yogatella'); // Replace with your DB name
        console.log('✅ Connected to MongoDB');
    }
    return db;
}
