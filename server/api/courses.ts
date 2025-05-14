import { connectDB } from '../utility/db';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    const query = getQuery(event);
    const name = query.name;

    const filter = name ? { name } : {};
    const course = await db.collection('activities').findOne(filter);

    if (!course) {
      return { success: false, message: 'Course not found' };
    }

    return { success: true, data: course };
  } catch (error) {
    console.error('Error fetching course:', error);
    return {
      success: false,
      message: 'Failed to fetch course',
      error: (error as Error).message
    };
  }
});
