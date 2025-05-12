import { connectDB } from '../utility/db';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    console.log('Successfully connected to MongoDB');
    
    const query = getQuery(event);
    const type = query.type;
    const highlightsParam = query.highlights;

    const filter: any = {};

    if (type) {
      filter.type = type;
    }

    if (highlightsParam === 'true') {
      filter.highlights = true;
    } else if (highlightsParam === 'false') {
      filter.highlights = false;
    }
    // Se highlightsParam è undefined o un valore non valido, lo ignori

    const activities = await db.collection('activities').find(filter).toArray();
    console.log(`Fetched activities with filter`, filter, activities);
    
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
