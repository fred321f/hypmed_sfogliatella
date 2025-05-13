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


const courses = ref([]);
const error = ref(null);
const daysOfWeek = ref([]);
const availableTimes = ref([]);

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

  onMounted(async () => {
  try {
    let url = '/api/activitiesFilters';            // ------------------------------> URL dell'API per ottenere i corsi filtrati
    const params = new URLSearchParams();

    // Costruisce dinamicamente i filtri dalla props (tipo, livello, etc.)
    Object.entries(props).forEach(([key, value]) => {
      if (value) params.append(key, value); // Aggiungi solo i parametri che non sono vuoti
    });

    if (params.toString()) {
      url += `?${params.toString()}`; // Aggiungi i filtri all'URL della richiesta
    }

    const response = await fetch(url); // Effettua la richiesta al server
    const result = await response.json(); // Converte la risposta in JSON

    if (result.success) {
      courses.value = result.data; // Memorizza i corsi ricevuti

      // Estrae i giorni unici dai corsi ricevuti
      const weekOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']; // Ordine predefinito dei giorni
      const uniqueDays = [...new Set(result.data.map(course => course.day))]; // Estrae i giorni unici dai corsi ricevuti

      // Ordina i giorni secondo l'ordine canonico (Lunedì - Domenica)
      daysOfWeek.value = weekOrder.filter(day => uniqueDays.includes(day)); // Filtra solo i giorni che esistono nei corsi ricevuti

      // Estrae e ordina gli orari unici
      availableTimes.value = [...new Set(result.data.map(course => course.time))] // Estrae gli orari unici
        .sort((a, b) => a.localeCompare(b, 'en', { numeric: true })); // Ordina gli orari in ordine crescente (alfabetico e numerico)

    } else {
      throw new Error(result.message || 'Unknown error'); // Se la risposta non è di successo, lancia un errore
    }
  } catch (err) {
    error.value = err.message; // Se si verifica un errore, memorizza il messaggio di errore
  }
});
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
</style>
