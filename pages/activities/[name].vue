<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '#app';
import loadingSpinner from '@/components/loadingSpinner.vue';

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

// Helper function to get activity image
const getImage = (activity) => {
  if (activity.imgURL) {
    return `https://res.cloudinary.com/dpba22oef/image/upload/w_1000,ar_3:2,c_fill,g_auto/${activity.imgURL}`;
  }

  switch (activity.type) {
    case 'Yoga':
      return 'https://cdn.yogaacademy.it/wp-content/uploads/2022/10/DSC00991-scaled.jpeg';
    case 'Meditation':
      return 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop';
    default:
      return 'https://cdn.yogaacademy.it/wp-content/uploads/2024/01/fless.png';
  }
};
</script>

<template>
  <div v-if="loading" class="text-center" aria-live="polite" aria-busy="true">
    <loadingSpinner aria-label="Loading activity information" />
  </div>

  <div v-else-if="error" class="text-danger text-center" role="alert" aria-live="assertive">
    <p>{{ error }}</p>
  </div>

  <div v-else class="container my-5" role="main" aria-labelledby="activity-title">
    <h1 id="activity-title" class="my-5 text-center display-1">{{ activity.name }}</h1>

    <!-- ----- ACTIVITY Section ----- -->
    <section aria-labelledby="activity-details-heading" class="mb-5">
      <h2 id="activity-details-heading" class="visually-hidden">Activity Details</h2>
      <div class="row align-items-center p-0">
        <!-- IMAGE -->
        <div class="col-md-6 p-0 mb-4 mb-md-0">
          <img :src="getImage(activity)" class="img-fluid shadow-lg"
            style="object-fit: cover; width: 100%; max-height: 500px; border-radius: 15px;"
            :alt="`${activity.name} - ${activity.type} activity`" aria-describedby="activity-title" />
        </div>
        <!-- INFO -->
        <div class="col-md-6 p-0">
          <div class="p-4">
            <p v-if="activity.description">{{ activity.description }}</p>
            <dl>
              <div v-if="activity.level" class="mb-2">
                <dt class="d-inline font-weight-bold">Level:</dt>
                <dd class="d-inline ml-1">{{ activity.level }}</dd>
              </div>

              <div v-if="activity.time" class="mb-2">
                <dt class="d-inline font-weight-bold">Time:</dt>
                <dd class="d-inline ml-1">{{ activity.time }}</dd>
              </div>

              <div v-if="activity.day" class="mb-2">
                <dt class="d-inline font-weight-bold">Day:</dt>
                <dd class="d-inline ml-1">{{ activity.day }}</dd>
              </div>

              <div v-if="activity.location" class="mb-2">
                <dt class="d-inline font-weight-bold">Location:</dt>
                <dd class="d-inline ml-1">{{ activity.location }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- ----- TEACHER Section ----- -->
    <section v-if="activity.teacher" class="mt-5" aria-labelledby="teacher-section-heading">
      <h2 id="teacher-section-heading" class="display-5 text-md-start">Meet The Teacher: </h2>

      <div class="row mt-4 align-items-center shadow-lg rounded-4 bg-white p-0">
        <!-- Teacher Image on the left -->
        <div class="col-md-6 p-0 mb-4 mb-md-0">
          <img :src="activity.teacher.imageUrl" class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            :alt="`Photo of ${activity.teacher.name}, yoga teacher`" />
        </div>

        <!-- Teacher Description on the right with border -->
        <div class="col-md-6 p-0">
          <div class="p-4">
            <h3 class="fs-1">{{ activity.teacher.name }}</h3>
            <p class="lead mb-0">{{ activity.teacher.description }}</p>
            <a :href="`/teachers/${activity.teacher.name}`" class="my-link"
              :aria-label="`Learn more about ${activity.teacher.name}`">
              Learn more <i class="bi-arrow-right bi" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Guest Section -->
    <section v-if="activity.guest" class="mt-5" aria-labelledby="guest-section-heading">
      <h2 id="guest-section-heading" class="display-5 text-center text-md-start">Special Guest:</h2>

      <div class="row align-items-center shadow-lg rounded-4 bg-white p-0">
        <!-- Guest Image -->
        <div class="col-md-6 p-0 mb-4 mb-md-0">
          <img :src="activity.guest.imageURL" class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            :alt="`Photo of ${activity.guest.name}, special guest`" />
        </div>

        <!-- Guest Description on the right with border -->
        <div class="col-md-6 p-0">
          <div class="p-4">
            <h3 class="fs-1">{{ activity.guest.name }}</h3>
            <p class="mb-0 lead">{{ activity.guest.description }}</p>
          </div>
        </div>
      </div>
    </section>
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