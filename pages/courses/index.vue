<script setup>
import Calendar from '~/components/coursesCalendar.vue';
import ActivitiesList from '~/components/ActivitiesList.vue';

import Overview from '~/components/ActivitiesOverview.vue';
</script>



<template>
  <div class="container">
    <h1 class="my-5 text-center display-1">Courses</h1>
    <p class="mb-5 text-center lead">
      Our offering include a variety of yoga and meditation courses suitable for all levels:
      from complete beginners to seasoned practitioners. Each class is guided by experienced instructors.
      Meditation practices include mindfulness, breathwork, and guided visualization, designed to bring clarity, focus, and inner peace.
      We also offer structured multi-week programs to help deepen your personal practice.
    </p>

    <Calendar />  <!-- filter example: type="Meditation" day="Monday" time="09:00" 
    all other filters [name type taught_by	level	description	day	time] -->

    <h2 class="my-5 text-center display-4">Yoga Courses</h2>
    <ActivitiesList type="Yoga" />

    <h2 class="my-5 text-center display-4">Meditation Courses</h2>
    <ActivitiesList type="Meditation" />

    <h1 class="my-5 text-center display-1">Other activities</h1>
    <Overview hide="Yoga and meditation courses"/>

  </div>
</template>
