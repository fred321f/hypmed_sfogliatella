const uri = process.env.MONGO_URI; // MongoDB connection string

const dbName = 'yogatella'; // Replace with your database name

async function refactorDatabase() {
  try {
    await client.connect();
    const db = client.db(dbName);

    // Building a map of teacher names → their actual ObjectIDs
    const teacherMap = {};
    const teachers = await db.collection('teachers').find().toArray();
    teachers.forEach(teacher => {
      teacherMap[teacher.name] = teacher._id;
    });

    // Updating the 'activities' collection
    const activities = await db.collection('activities').find().toArray();
    for (const activity of activities) {
      const teacherName = activity.teacher;
      const teacherId = teacherMap[teacherName];

      if (teacherId && teacherName !== undefined) {
        await db.collection('activities').updateOne(
          { _id: activity._id },
          {
            $set: { teacherID: teacherId },
            $unset: { teacher: "" } // Removing the old string field
          }
        );
      }
    }

    // Updating the 'courses' collection
    const courses = await db.collection('courses').find().toArray();
    for (const course of courses) {
      const teacherName = course.taught_by;
      const teacherId = teacherMap[teacherName];

      if (teacherId && teacherName !== undefined) {
        await db.collection('courses').updateOne(
          { _id: course._id },
          {
            $set: { teacherID: teacherId },
            $unset: { taught_by: "" } // Removing the old string field
          }
        );
      }
    }

    // Updating the 'seminars' collection
    const seminars = await db.collection('seminars').find().toArray();
    for (const seminar of seminars) {
      const heldByName = seminar.heldBy;

      const matchingTeacher = Object.entries(teacherMap).find(([fullName, _id]) =>
        fullName.startsWith(heldByName)
      );

      if (matchingTeacher) {
        const [matchedName, teacherId] = matchingTeacher;

        await db.collection('seminars').updateOne(
          { _id: seminar._id },
          {
            $set: { teacherID: teacherId },
            $unset: { heldBy: "" } // Removing the old string field
          }
        );
      }
    }

    console.log("Teacher name fields are now being replaced with ID references in a consistent way.");
  } catch (error) {
    console.error("An error occurred while refactoring the database:", error);
  } finally {
    await client.close();
  }
}

refactorDatabase();
