import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });


const uri = process.env.MONGO_URI;
if (!uri) throw new Error('MONGO_URI is missing in your .env file');

const client = new MongoClient(uri);
const dbName = 'yogatella';

async function refactorDatabase() {
  try {
    await client.connect();
    const db = client.db(dbName);

    const teacherMap = {};
    const teachers = await db.collection('teachers').find().toArray();
    teachers.forEach(teacher => {
      teacherMap[teacher.name] = teacher._id;
    });

    const activities = await db.collection('activities').find().toArray();
    for (const activity of activities) {
      const teacherId = teacherMap[activity.teacher];
      if (teacherId) {
        await db.collection('activities').updateOne(
          { _id: activity._id },
          {
            $set: { teacherID: teacherId },
            $unset: { teacher: '' }
          }
        );
      }
    }

    const courses = await db.collection('courses').find().toArray();
    for (const course of courses) {
      const teacherId = teacherMap[course.taught_by];
      if (teacherId) {
        await db.collection('courses').updateOne(
          { _id: course._id },
          {
            $set: { teacherID: teacherId },
            $unset: { taught_by: '' }
          }
        );
      }
    }

    const seminars = await db.collection('seminars').find().toArray();
    for (const seminar of seminars) {
      const heldByName = seminar.heldBy;
      const match = Object.entries(teacherMap).find(([name]) =>
        name.startsWith(heldByName)
      );
      if (match) {
        const [, teacherId] = match;
        await db.collection('seminars').updateOne(
          { _id: seminar._id },
          {
            $set: { teacherID: teacherId },
            $unset: { heldBy: '' }
          }
        );
      }
    }

    console.log('Refactor complete.');
  } catch (err) {
    console.error('Error during refactor:', err);
  } finally {
    await client.close();
  }
}

refactorDatabase();
