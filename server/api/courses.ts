import { connectDB } from '../utility/db';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    const query = getQuery(event);
    const type = query.type;

    const filter = type ? { type } : {};
    const courses = await db.collection('courses').find(filter).toArray();

    // Fetch and attach teacher data
    const teacherIds = courses.map((course: { teacherID: any; }) => course.teacherID).filter(Boolean);
    const teachers = await db.collection('teachers')
      .find({ _id: { $in: teacherIds } })
      .toArray();

    const teacherMap = Object.fromEntries(teachers.map((t: { _id: { toString: () => any; }; }) => [t._id.toString(), t]));

    // Attach full teacher data to each course
    const enrichedCourses = courses.map((course: { teacherID: { toString: () => string | number; }; }) => ({
      ...course,
      teacher: teacherMap[course.teacherID?.toString()] || null
    }));

    return { success: true, data: enrichedCourses };
  } catch (error) {
    console.error('Error fetching courses:', error);
    return {
      success: false,
      message: 'Failed to fetch courses',
      error: (error as Error).message
    };
  }
});