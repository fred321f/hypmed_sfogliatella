import { connectDB } from '../utility/db';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    console.log('Successfully connected to MongoDB');
    
    const query = getQuery(event); // Get query parameters from the URL
    const type = query.type; // Get the 'type' parameter (Yoga, Meditation, etc.)
    
    // If type is provided, filter by type
    const filter = type ? { type } : {};

    const activities = await db.collection('activities').find(filter).toArray(); // Apply the filter
    console.log(`Fetched ${type ? type : 'all'} activities:`, activities);
    
    return { success: true, data: activities };
  } catch (error) {
    console.error('Error fetching activities:', error);
    return {
      success: false,
      message: 'Failed to fetch activities',
      error: (error as Error).message
    };
  }
});
