<script setup>
import Overview from '~/components/ActivitiesOverview.vue';
import { useHead } from '#app';

//Set SEO metadata
useHead({
  title: 'Activities | YogaTella',
  meta: [
    { name: 'description', content: 'Explore our wide range of yoga, meditation and wellness activities at YogaTella Yoga Center' },
  ]
});
</script>



<template>
  <class class="container">
    <h1 class="my-5 text-center display-1">Activities</h1>
    <p class="mb-5 text-center lead">
      At Yogatella Yoga Center, we offer a diverse range of activities designed to support your physical, mental, and
      spiritual well-being. Our offerings are thoughtfully grouped into three main categories:
    </p>
    <Chatbot />
    <Overview />
  </class>
</template>
