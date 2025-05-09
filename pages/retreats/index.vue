<script setup>
import ActivitiesList from '~/components/ActivitiesList.vue';

import Overview from '~/components/ActivitiesOverview.vue';
</script>



<template>
  <div class="container">
    <h1 class="my-5 text-center display-1">Retreats</h1>
    <p class="mb-5 text-center lead">
      Our retreats offer a wide range of yoga and meditation experiences suitable for all levels, from complete beginners to experienced practitioners. 
      Each session is led by knowledgeable, compassionate instructors dedicated to supporting your journey. <br/>
      Meditation practices include mindfulness, breathwork, and guided visualization, all designed to bring clarity, focus, and a deep sense of inner peace. <br/>
      We also offer multi-day retreats and structured programs that provide a deeper dive into your personal practice, helping you reconnect, recharge, and grow both on and off the mat.
    </p>

    <h2 class="my-5 text-center display-4">Retreats</h2>
    <ActivitiesList type="Retreat"/>

    <h1 class="my-5 text-center display-1">Other activities</h1>
    <Overview hide="Retreats"/>

  </div>
</template>
