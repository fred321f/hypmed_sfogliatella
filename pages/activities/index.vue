<script setup>
import Overview from '~/components/ActivitiesOverview.vue';
import { useHead } from '#app';
import Chatbot from '~/components/Chatbot.vue'; // Make sure this import path is correct

// Set SEO metadata
useHead({
  title: 'Activities | YogaTella',
  meta: [
    { name: 'description', content: 'Explore our wide range of yoga, meditation and wellness activities at YogaTella Yoga Center' },
  ]
});
</script>

<template>
  <div class="container" role="main" aria-labelledby="activities-heading">
    <h1 id="activities-heading" class="my-5 text-center display-1">Activities</h1>
    <p class="mb-5 text-center lead">
      At Yogatella Yoga Center, we offer a diverse range of activities designed to support your physical, mental, and
      spiritual well-being. Our offerings are thoughtfully grouped into three main categories:
    </p>

    <!-- Chat assistant for activity inquiries -->
    <Chatbot aria-label="YogaTella chat assistant" />

    <!-- Activity categories overview -->
    <Overview aria-label="Activities overview" />
  </div>
</template>