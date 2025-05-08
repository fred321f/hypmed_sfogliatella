import { connectDB } from '../utility/db';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    console.log('Successfully connected to MongoDB');
    
    const query = getQuery(event); // Get query parameters from the URL
    const type = query.type; // Get the 'type' parameter (Yoga, Meditation, etc.)
    
    // If type is provided, filter by type
    const filter = type ? { type } : {};

    const courses = await db.collection('activities').find(filter).toArray(); // Apply the filter
    console.log(`Fetched ${type ? type : 'all'} courses:`, courses);
    
    return { success: true, data: courses };
  } catch (error) {
    console.error('Error fetching courses:', error);
    return {
      success: false,
      message: 'Failed to fetch courses',
      error: (error as Error).message
    };
  }
});
