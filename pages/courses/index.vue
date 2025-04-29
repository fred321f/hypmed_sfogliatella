<script setup>
import CoursesList from '~/components/CoursesList.vue';
</script>

<template>
  <title>Courses</title>

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

