import { ObjectId } from 'mongodb';
import { connectDB } from '../utility/db';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    const query = getQuery(event);

    const filter: any = {};

    // Convert teacherID to ObjectId if present
    if (query.teacherID) {
      try {
        filter.teacherID = new ObjectId(query.teacherID);
      } catch (e) {
        console.error('Invalid teacherID format');
      }
    }

    // Other optional filters
    if (query.name) filter.name = query.name;
    if (query.teacher) filter.teacher = query.teacher;
    if (query.level) filter.level = query.level;
    if (query.overview) filter.overview = query.overview;
    if (query.day) filter.day = query.day;
    if (query.time) filter.time = query.time;
    if (query.type) {
      const types = Array.isArray(query.type) ? query.type : [query.type];
      filter.type = { $in: types };
    }
    if (query.description) {
      const regex = { $regex: query.description, $options: 'i' };
      filter.$or = [
        { name: regex },
        { type: regex },
        { overview: regex },
        { description: regex },
        { teacher: regex }
      ];
    }

    // Sort logic
    let sortOption = {};
    if (query.sort === 'true') {
      sortOption = { time: 1 };
    }

    // Fetch activities
    const activities = await db.collection('activities').find(filter).sort(sortOption).toArray();

    // Get all teacherIDs and guestIDs
    const teacherIDs = [...new Set(activities.map(a => a.teacherID?.toString()).filter(Boolean))];
    const guestIDs = [...new Set(activities.map(a => a.guestID?.toString()).filter(Boolean))];

    // Fetch matching teachers
    const teachers = await db.collection('teachers')
      .find({ _id: { $in: teacherIDs.map(id => new ObjectId(id)) } })
      .toArray();

    // Fetch matching guests
    const guests = await db.collection('guests')
      .find({ _id: { $in: guestIDs.map(id => new ObjectId(id)) } })
      .toArray();

    // Map teachers and guests by ID
    const teacherMap = new Map(teachers.map(t => [t._id.toString(), t.name]));
    const guestMap = new Map(guests.map(g => [g._id.toString(), g.name]));

    // Enrich activities with teacher and guest names
    const enrichedActivities = activities.map(a => ({
      ...a,
      teacher: teacherMap.get(a.teacherID?.toString()) || 'Unknown',
      guest: guestMap.get(a.guestID?.toString()) || '' // Leave guest as empty string if not found
    }));

    return { success: true, data: enrichedActivities };
  } catch (error) {
    console.error('Error fetching activities:', error);
    return {
      success: false,
      message: 'Failed to fetch activities',
      error: (error as Error).message
    };
  }
});
