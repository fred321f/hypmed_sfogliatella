<!-- To add in a page you need to add:
<script setup>
    import Calendar from '~/components/WeekCalendar.vue';
</script>

<template>
    ...
    <Calendar />
    ...
</template>
-->

<script setup>
import { ref } from 'vue';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const availableTimes = ['09:00', '10:00', '18:00', '19:00']; // You can expand this array

const courses = ref([
  { name: 'Vinyasa', time: '09:00', day: 'Monday', type: 'Yoga' },
  { name: 'Forrest yoga', time: '10:00', day: 'Wednesday', type: 'Yoga' },
  { name: 'Katonah yoga', time: '18:00', day: 'Friday', type: 'Yoga' },
  { name: 'Katonah yoga advanced', time: '19:00', day: 'Tuesday', type: 'Yoga' },
  { name: 'Body mind flow', time: '09:00', day: 'Thursday', type: 'Yoga' },
  { name: 'Power yoga', time: '10:00', day: 'Saturday', type: 'Yoga' },
  { name: 'Mandala flow', time: '18:00', day: 'Sunday', type: 'Yoga' },
  { name: 'Basis of meditation', time: '09:00', day: 'Tuesday', type: 'Meditation' },
  { name: 'Yoga Roots', time: '10:00', day: 'Thursday', type: 'Meditation' },
  { name: 'The power of breathing', time: '19:00', day: 'Friday', type: 'Meditation' },
  { name: 'Meditation advanced', time: '18:00', day: 'Monday', type: 'Meditation' }
]);

const getCoursesForSlot = (day, time) => {
  return courses.value.filter(course => course.day === day && course.time === time);
};
</script>

<template> 
  <div class="container">
    <h2>Yoga and Meditation Schedule</h2>
    <table class="schedule-table">
      <thead>
        <tr>
          <th>Time</th>
          <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in availableTimes" :key="time">
          <td class="time-cell">{{ time }}</td>
          <td v-for="day in daysOfWeek" :key="day">
            <div
              v-for="course in getCoursesForSlot(day, time)"
              :key="course.name"
              :class="['course-box', course.type === 'Yoga' ? 'yoga' : 'meditation']"
            >
              <strong>{{ course.name }}</strong><br />
              <em>{{ course.type }}</em>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ddd;
  padding: 10px;
  vertical-align: top;
  text-align: center;
}

.schedule-table th {
  background-color: #f0f0f0;
}

.time-cell {
  font-weight: bold;
  background-color: #f9f9f9;
}

.course-box {
  margin: 5px 0;
  padding: 8px;
  border-radius: 6px;
  color: #333;
  font-size: 0.9rem;
}

.yoga {
  background-color: #d9fdd3; /* Light green */
  border-left: 4px solid #4caf50;
}

.meditation {
  background-color: #d0f0ff; /* Light blue */
  border-left: 4px solid #2196f3;
}
</style>
