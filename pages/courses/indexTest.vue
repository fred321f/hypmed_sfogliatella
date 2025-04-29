<script setup>
import CoursesList from '~/components/CoursesList.vue';
import Teachers from '~/components/TeachersList.vue';

import Calendar from '~/components/WeekCalendar.vue';
</script>



<template>

  <Calendar />

  <div class="container">
    <h1 class="my-5 text-center display-2">Courses</h1>
    <p class="mb-5 text-center lead">
      Our offering include a variety of yoga and meditation courses suitable for all levels:
      from complete beginners to seasoned practitioners. Each class is guided by experienced instructors.
      Meditation practices include mindfulness, breathwork, and guided visualization, designed to bring clarity, focus, and inner peace.
      We also offer structured multi-week programs to help deepen your personal practice.
    </p>
    <h2 class="my-5 text-center display-4">Yoga Courses</h2>
    <CoursesList type="Yoga" />
    <h2 class="my-5 text-center display-4">Meditation Courses</h2>
    <CoursesList type="Meditation" />
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

.corso-box {
  margin: 5px 0;
  padding: 8px;
  border-radius: 6px;
  color: #333;
  font-size: 0.9rem;
}

.yoga {
  background-color: #d9fdd3; /* Verde chiaro */
  border-left: 4px solid #4caf50;
}

.meditation {
  background-color: #d0f0ff; /* Azzurro chiaro */
  border-left: 4px solid #2196f3;
}
</style>