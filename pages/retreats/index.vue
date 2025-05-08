<script setup>
import ActivitiesList from '~/components/ActivitiesList.vue';
</script>



<template>
  <div class="container">
    <h1 class="my-5 text-center display-2">Retreats</h1>
    <p class="mb-5 text-center lead">
      Our retreats offer a wide range of yoga and meditation experiences suitable for all levels, from complete beginners to experienced practitioners. 
      Each session is led by knowledgeable, compassionate instructors dedicated to supporting your journey. <br/>
      Meditation practices include mindfulness, breathwork, and guided visualization, all designed to bring clarity, focus, and a deep sense of inner peace. <br/>
      We also offer multi-day retreats and structured programs that provide a deeper dive into your personal practice, helping you reconnect, recharge, and grow both on and off the mat.
    </p>

    <Calendar />  <!-- filter example: type="Meditation" day="Monday" time="09:00" 
    all other filters [name type taught_by	level	description	day	time] -->

    <h2 class="my-5 text-center display-4">Retreats</h2>
    <ActivitiesList type="Retreat"/>

  </div>
</template>
