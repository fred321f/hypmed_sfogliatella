<!-- To add in a page you need to add:
<script setup>
    import Calendar from '~/components/coursesCalendar.vue';
</script>

<template>
    ...
    <Calendar />
    ...
</template>
-->

<template>
  <div class="container">
    <h2>Yoga and Meditation Schedule</h2>

    <div class="schedule-table-wrapper">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="time in filteredTimes" :key="time">
            <td class="time-cell">{{ time }}</td>
            <td v-for="day in daysOfWeek" :key="day">
              <div 
                v-for="course in getCoursesForSlot(day, time)"
                :key="course.name"
              >
                <div
                  v-if="showTypes.includes(course.type.toLowerCase())"
                  :class="['course-box', course.type === 'Yoga' ? 'yoga' : 'meditation']"
                >

                  <a :href="'#' + course.name.replace(/\s+/g, '-').toLowerCase()" 
                    style="text-decoration: none; color: inherit;">

                    <strong>{{ course.name }}</strong><br />
                    <em>{{ course.type }}</em>
                  </a>
                </div>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="!courses.length && !error" class="text-center">
      <p>No courses available.</p>
    </div>
    <div v-if="error" class="text-danger">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Props accettate per filtrare i corsi dinamicamente
const props = defineProps({
  name: String,
  type: String,
  level: String,
  teacher: String,
  day: String,
  time: String,
  description: String,
  show: {         // to decide which type of course to show in the calendar
    type: String, // e.g. "yoga meditation"
    default: ''
  }
});

const showTypes = computed(() =>
  props.show
    .toLowerCase()
    .split(' ')
    .map(type => type.trim())
    .filter(Boolean)
);


const { data: courses, error } = await useLazyFetch('/api/activitiesFilters', {
  query: computed(() => {
    const params = {};
    Object.entries(props).forEach(([key, value]) => {
      if (value) params[key] = value;
    });
    return params;
  }),
  transform: (result) => {
    if (result.success) {
      return result.data;
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: result.message || 'Failed to fetch courses'
      });
    }
  },
  default: () => []
});

// Computed properties for days and times
const daysOfWeek = computed(() => {
  const weekOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const uniqueDays = [...new Set(courses.value.map(course => course.day))];
  return weekOrder.filter(day => uniqueDays.includes(day));
});

const availableTimes = computed(() => {
  return [...new Set(courses.value.map(course => course.time))]
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
});

const filteredTimes = computed(() => {
  return availableTimes.value.filter(time =>
    daysOfWeek.value.some(day =>
      getCoursesForSlot(day, time).some(course =>
        showTypes.value.includes(course.type.toLowerCase())
      )
    )
  );
});

// Funzione per filtrare corsi in base a giorno e orario
const getCoursesForSlot = (day, time) =>
  courses.value.filter(course => course.day === day && course.time === time);
</script>



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


.schedule-table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}




/* Scrollbar su WebKit (Chrome, Edge, Safari) */
.schedule-table-wrapper::-webkit-scrollbar {
  height: 15px; /* Aumenta l'altezza della barra orizzontale */
}

.schedule-table-wrapper::-webkit-scrollbar-track {
  background: #ffffff;
  border-radius: 10px;
}

.schedule-table-wrapper::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 10px;
  border: 3px solid #ffffff; /* Spazio attorno al thumb */
}

</style>
