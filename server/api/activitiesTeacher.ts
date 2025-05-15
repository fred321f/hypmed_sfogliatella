import { connectDB } from '../utility/db';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  try {
    const db = await connectDB();
    const query = getQuery(event);

    const name = query.name;
    const filter: any = {};

    if (name) {
      filter.name = name;
    }

    if (query.type) {
      const types = Array.isArray(query.type) ? query.type : [query.type];
      filter.type = { $in: types };
    }

    if (query.highlights === 'true') {
      filter.highlights = true;
    } else if (query.highlights === 'false') {
      filter.highlights = false;
    }

    // If name is provided, return ONE activity with its teacher and guest
    if (name) {
      const activity = await db.collection('activities').findOne(filter);
      if (!activity) {
        return { success: false, message: 'Activity not found' };
      }

      let teacher = null;
      if (activity.teacherID && ObjectId.isValid(activity.teacherID)) {
        teacher = await db.collection('teachers').findOne({ _id: new ObjectId(activity.teacherID) });
      }

      let guest = null;
      if (activity.guestID && ObjectId.isValid(activity.guestID)) {
        guest = await db.collection('guests').findOne({ _id: new ObjectId(activity.guestID) });
      }

      return {
        success: true,
        data: {
          ...activity,
          teacher,
          guest // Adding guest information
        }
      };
    }

    // Else return a list of activities (for listings etc.)
    const activities = await db.collection('activities').find(filter).toArray();
    return { success: true, data: activities };

  } catch (error) {
    console.error('Error fetching activity(ies):', error);
    return {
      success: false,
      message: 'Failed to fetch activity',
      error: (error as Error).message
    };
  }
});
