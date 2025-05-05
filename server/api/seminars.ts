import { connectDB } from '../utility/db';

export default defineEventHandler(async () => {
  try {
    const db = await connectDB();
    console.log('Successfully connected to MongoDB');

    const seminars = await db.collection('seminars').find().toArray();
    console.log('Fetched seminars:', seminars);

    return { success: true, data: seminars };
  } catch (error) {
    console.error('Error fetching seminars:', error);
    return { 
      success: false, 
      message: 'Failed to fetch seminars',
      error: (error as Error).message 
    };
  }
});
