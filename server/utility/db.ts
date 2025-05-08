import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const uri = process.env.MONGO_URI;
if (!uri) throw new Error('MONGO_URI is missing in .env');

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