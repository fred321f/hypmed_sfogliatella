// Building a map of teacher names → their actual ObjectIDs
const teacherMap = {};
db.teachers.find().forEach(teacher => {
  teacherMap[teacher.name] = teacher._id;
});

// Updating the 'activities' collection
// Replacing the 'teacher' name field with a 'teacherID' reference
db.activities.find().forEach(activity => {
  const teacherName = activity.teacher;
  const teacherId = teacherMap[teacherName];

  if (teacherId && teacherName !== undefined) {
    db.activities.updateOne(
      { _id: activity._id },
      {
        $set: { teacherID: teacherId },
        $unset: { teacher: "" } // Removing the old string field
      }
    );
  }
});

// Updating the 'courses' collection
// Replacing the 'taught_by' string field with a 'teacherID' reference
db.courses.find().forEach(course => {
  const teacherName = course.taught_by;
  const teacherId = teacherMap[teacherName];

  if (teacherId && teacherName !== undefined) {
    db.courses.updateOne(
      { _id: course._id },
      {
        $set: { teacherID: teacherId },
        $unset: { taught_by: "" } // Removing the old string field
      }
    );
  }
});

// Updating the 'seminars' collection
// Replacing the 'heldBy' string field with a 'teacherID' reference
// Matching on first names (e.g., 'Susanna' → 'Susanna Barkataki')
db.seminars.find().forEach(seminar => {
  const heldByName = seminar.heldBy;

  const matchingTeacher = Object.entries(teacherMap).find(([fullName, _id]) =>
    fullName.startsWith(heldByName)
  );

  if (matchingTeacher) {
    const [matchedName, teacherId] = matchingTeacher;

    db.seminars.updateOne(
      { _id: seminar._id },
      {
        $set: { teacherID: teacherId },
        $unset: { heldBy: "" } // Removing the old string field
      }
    );
  }
});

print("Teacher name fields are now being replaced with ID references in a consistent way.");
