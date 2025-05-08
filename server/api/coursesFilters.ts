import { connectDB } from '../utility/db';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    console.log('Successfully connected to MongoDB');

    const query = getQuery(event);

    // Dynamically build the filter based on query parameters
    const filter: any = {};

    if (query.name) filter.name = query.name;
    if (query.type) filter.type = query.type;
    if (query.taught_by) filter.taught_by = query.taught_by;
    if (query.level) filter.level = query.level;
    if (query.description) filter.description = { $regex: query.description, $options: 'i' }; // text search for description
    if (query.day) filter.day = query.day;
    if (query.time) filter.time = query.time;

    // Check if the query parameter 'sort' is present and equals 'true'
    let sortOption = {};
    if (query.sort === 'true') {
      sortOption = { time: 1 }; // If 'sort=true', sort by time in ascending order
    }

    // Query with filters and optional sorting based on the 'sort' parameter
    const activities = await db.collection('activities').find(filter).sort(sortOption).toArray();

    console.log(`Fetched ${activities.length} course(s) with filter:`, filter);

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
