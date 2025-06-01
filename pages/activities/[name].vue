<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import loadingSpinner from '@/components/loadingSpinner.vue';
import Card from '~/components/cards/Card.vue';
import { getImage } from '../utility/getImage';  // <-- to load the image from the server
import { useHead } from '#imports'

const route = useRoute();
const activity = ref(null);
const error = ref(null);
const loading = ref(true);

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

useHead({
  title: activity.value ? `${activity.value.name} - Activity | YogaTella` : 'Activity | YogaTella',
  meta: [
    { name: 'description', content: activity.value ? `Discover details about ${activity.value.name} at YogaTella.` : 'Explore our activities at YogaTella.' }
  ]
})
</script>

<template>
  <div v-if="loading" class="text-center">
    <loadingSpinner />
  </div>

  <div v-else-if="error" class="text-danger text-center">
    <p>{{ error }}</p>
  </div>

  <div v-else class="my-5 container">
    <h1 class="my-5 text-center display-1">{{ activity.name }}</h1>

    <!-- ----- ACTIVITY Section ----- -->
    <div class="align-items-stretch p-0 row">
      <!-- IMAGE -->
      <div class="d-flex mb-4 mb-md-0 p-0 p-3 col-md-6">
        <img
          :src="getImage(activity)"
          class="shadow-lg w-100 h-100 img-fluid"
          style="object-fit: cover; border-radius: 15px;"
          alt="Activity Image"
        />
      </div>

      <!-- INFO -->
      <div class="d-flex align-items-center p-0 col-md-6">
        <div class="p-4 w-100 fs-5"> <!-- remove fs-5 if text too big -->
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
    <div v-if="activity.teacher" class="mt-5">
      <h2 class="text-md-start display-5">Meet The Teacher: </h2>
      <Card 
        type="horizontal" 
        :title="activity.teacher.name"
        :description="activity.teacher.overview"
        :imageUrl="activity.teacher.imageUrl"
        :linkUrl="`/teachers/${ activity.teacher.name }`" 
        buttonText="See more" 
      />
    </div>

    <!-- ----- Guest Section ----- -->
    <div v-if="activity.guest" class="mt-5">
      <h2 class="text-md-start display-5">Special Guest:</h2>
      <Card 
        type="horizontal" 
        :title="activity.guest.name"
        :description="activity.guest.description"
        :imageUrl="activity.guest.imageURL"
      />
    </div>
    
    <!--  <div v-if="activity.teacher" class="mt-5">
      <div class="align-items-center bg-white shadow-lg mt-4 p-0 rounded-4 row">
        <div class="mb-4 mb-md-0 p-0 col-md-6">
          <img
            :src="activity.teacher.imageUrl"
            class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            alt="Teacher Image"
          />
        </div>
        <div class="p-0 col-md-6">
          <div class="p-4">
            <h2 class="fs-1">{{ activity.teacher.name }}</h2>
            <p class="mb-0 lead">{{ activity.teacher.overview }}</p>
            <a :href="`/teachers/${ activity.teacher.name }`" class="my-link">
                Learn more <i class="bi-arrow-right bi"></i>
            </a>
            <a :href="`/teachers/${ activity.teacher.name }`" class="text-dark text-decoration-none fw-bold"></a>
          </div>
        </div>
      </div>
    </div>-->

    <!-- Guest Section 
    <div v-if="activity.guest" class="mt-5">
      <h2 class="text-md-start text-center display-5">Special Guest:</h2>

      <div class="align-items-center bg-white shadow-lg p-0 rounded-4 row">
        <div class="mb-4 mb-md-0 p-0 col-md-6">
          <img
            :src="activity.guest.imageURL"
            class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            alt="Guest Image"
          />
        </div>

        <div class="p-0 col-md-6">
          <div class="p-4">
            <h2 class="fs-1">{{ activity.guest.name }}</h2>
            <p class ="mb-0 lead">{{ activity.guest.description }}</p>
          </div>
        </div>
        
      </div>
    </div>-->

  </div>
</template>
