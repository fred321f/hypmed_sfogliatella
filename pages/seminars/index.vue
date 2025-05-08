<script setup>
import ActivitiesList from '~/components/ActivitiesList.vue';
</script>



<template>
  <div class="container">
    <h1 class="my-5 text-center display-2">Seminars and Workshops</h1>
    <p class="mb-5 text-center lead">
      Expand your knowledge and skills with our seminars and workshops, led by experts in yoga, wellness, and holistic health. 
      Topics range from anatomy and alignment to nutrition and personal development.
      These events are open to practitioners and professionals alike, providing a rich learning environment and opportunities for personal growth.
    </p>

    <h2 class="my-5 text-center display-4">Seminars</h2>
    <ActivitiesList type="Seminar"/>

    <h2 class="my-5 text-center display-4">Workshops</h2>
    <ActivitiesList type="Workshop"/>

  </div>
</template>
