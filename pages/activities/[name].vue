<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#app';
import loadingSpinner from '@/components/loadingSpinner.vue';
import Card from '~/components/cards/Card.vue';
import { getImage } from '../utility/getImage';  // <-- to load the image from the server

const route = useRoute();
const activity = ref(null);
const error = ref(null);
const loading = ref(true);

// Dynamic SEO metadata based on the activity
const pageTitle = computed(() => {
  return activity.value ? `${activity.value.name} | YogaTella Activities` : 'Activity | YogaTella';
});

const pageDescription = computed(() => {
  return activity.value?.description
    ? `${activity.value.description.substring(0, 150)}...`
    : 'Discover our unique activities at YogaTella Yoga Center';
});

// Set dynamic SEO metadata
useHead(() => ({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDescription.value }
  ]
}));

onMounted(async () => {
  try {
    const response = await fetch(`/api/activitiesTeacher?name=${route.params.name}`);
    const result = await response.json();

    if (result.success) {
      activity.value = result.data;
    } else {
      throw new Error(result.message);
    }
  } catch (err) {
    console.error(err);
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}); 
</script>

<template>
  <div v-if="loading" class="text-center" aria-live="polite" aria-busy="true">
    <loadingSpinner aria-label="Loading activity information" />
  </div>

  <div v-else-if="error" class="text-danger text-center" role="alert" aria-live="assertive">
    <p>{{ error }}</p>
  </div>

  <div v-else class="container my-5">
    <h1 class="my-5 text-center display-1">{{ activity.name }}</h1>

    <!-- ----- ACTIVITY Section ----- -->
    <div class="row align-items-stretch p-0">
      <!-- IMAGE -->
      <div class="col-md-6 p-0 mb-4 mb-md-0 d-flex p-3">
        <img :src="getImage(activity)" class="img-fluid w-100 h-100 shadow-lg"
          style="object-fit: cover; border-radius: 15px;" alt="Activity Image" />
      </div>

      <!-- INFO -->
      <div class="col-md-6 p-0 d-flex align-items-center">
        <div class="p-4 fs-5 w-100"> <!-- remove fs-5 if text too big -->
          <p v-if="activity.description">{{ activity.description }}</p>
          <p v-if="activity.level">Level: <strong>{{ activity.level }}</strong></p>
          <p v-if="activity.day">Day: <strong>{{ activity.day }}</strong></p>
          <p v-if="activity.time">Time: <strong>{{ activity.time }}</strong></p>
          <p v-if="activity.date">The retreat is <strong>{{ activity.date }}</strong></p>
          <p v-if="activity.duration">For a total duration of <strong>{{ activity.duration }}</strong></p>
          <p v-if="activity.location">In a beautifull location in <strong>{{ activity.location }}</strong></p>
        </div>
      </div>
    </div>


    <!-- ----- TEACHER Section ----- -->
    <div v-if="activity.teacher" class="mt-5 ">
      <h2 class="display-5 text-md-start">Meet The Teacher: </h2>
      <Card type="horizontal" :title="activity.teacher.name" :description="activity.teacher.overview"
        :imageUrl="activity.teacher.imageUrl" :linkUrl="`/teachers/${activity.teacher.name}`" buttonText="See more" />
    </div>

    <!-- ----- Guest Section ----- -->
    <div v-if="activity.guest" class="mt-5 ">
      <h2 class="display-5 text-md-start">Special Guest:</h2>
      <Card type="horizontal" :title="activity.guest.name" :description="activity.guest.description"
        :imageUrl="activity.guest.imageURL" />
    </div>

    <!--  <div v-if="activity.teacher" class="mt-5 ">
      <div class="row mt-4 align-items-center shadow-lg rounded-4 bg-white p-0">
        <div class="col-md-6 p-0 mb-4 mb-md-0">
          <img :src="activity.teacher.imageUrl" class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            :alt="`Photo of ${activity.teacher.name}, yoga teacher`" />
        </div>
        <div class="col-md-6 p-0">
          <div class="p-4">
            <h2 class="fs-1">{{ activity.teacher.name }}</h2>
            <p class="lead mb-0">{{ activity.teacher.overview }}</p>
            <a :href="`/teachers/${ activity.teacher.name }`" class="my-link">
                Learn more <i class="bi-arrow-right bi"></i>
            </a>
          </div>
        </div>
      </div>
    </div>-->

    <!-- Guest Section 
    <div v-if="activity.guest" class="mt-5">
      <h2 class="display-5 text-center text-md-start">Special Guest:</h2>

      <div class="row align-items-center shadow-lg rounded-4 bg-white p-0">
        <div class="col-md-6 p-0 mb-4 mb-md-0">
          <img :src="activity.guest.imageURL" class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            :alt="`Photo of ${activity.guest.name}, special guest`" />
        </div>

        <div class="col-md-6 p-0">
          <div class="p-4">
            <h3 class="fs-1">{{ activity.guest.name }}</h3>
            <p class="mb-0 lead">{{ activity.guest.description }}</p>
          </div>
        </div>
      </div>
    </div>-->

  </div>
</template>

<style>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>