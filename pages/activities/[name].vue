<script setup>
import { ref, onMounted } from 'vue';
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
  <div v-if="loading" class="text-center">
    <loadingSpinner />
  </div>

  <div v-else-if="error" class="text-danger text-center">
    <p>{{ error }}</p>
  </div>

  <div v-else class="container my-5">
    <h1 class="my-5 text-center display-1">{{ activity.name }}</h1>
    <!-- ----- ACTIVITY Section ----- -->
    <div class="row align-items-center p-0">
      <!-- IMAGE -->
      <div class="col-md-6 p-0 mb-4 mb-md-0">
        <img :src="getImage(activity)" class="img-fluid shadow-lg "
          style="object-fit: cover; width: 100%; max-height: 500px; border-radius: 15px;  " alt="Activity Image" />
      </div>
      <!-- INFO -->
      <div class="col-md-6 p-0">
        <div class="p-4">
          <p v-if="activity.description">{{ activity.description }}</p>
          <p v-if="activity.level"><strong>Level:</strong> {{ activity.level }}</p>
          <p v-if="activity.time"><strong>Time:</strong> {{ activity.time }}</p>
          <p v-if="activity.day"><strong>Day:</strong> {{ activity.day }}</p>
          <p v-if="activity.location"><strong>Location:</strong> {{ activity.location }}</p>
        </div>
      </div>
    </div>

    <!-- ----- TEACHER Section ----- -->
    <div v-if="activity.teacher" class="mt-5 ">
      <h2 class="display-5 text-md-start">Meet The Teacher: </h2>

      <div class="row mt-4 align-items-center shadow-lg rounded-4 bg-white p-0">
        <!-- Teacher Image on the left -->
        <div class="col-md-6 p-0 mb-4 mb-md-0">
          <img :src="activity.teacher.imageUrl" class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            alt="Teacher Image" />
        </div>

        <!-- Teacher Description on the right with border -->
        <div class="col-md-6 p-0">
          <div class="p-4">
            <h2 class="fs-1">{{ activity.teacher.name }}</h2>
            <p class="lead mb-0">{{ activity.teacher.description }}</p>
            <a :href="`/teachers/${activity.teacher.name}`" class="my-link"
              aria-label="Button to learn more about the teacher">
              Learn more <i class="bi-arrow-right bi"></i>
            </a>
            <a :href="`/teachers/${activity.teacher.name}`" class="text-decoration-none text-dark fw-bold"></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Guest Section -->
    <div v-if="activity.guest" class="mt-5">
      <h2 class="display-5 text-center text-md-start">Special Guest:</h2>

      <div class="row align-items-center shadow-lg rounded-4 bg-white p-0">
        <!-- Guest Image -->
        <div class="col-md-6 p-0 mb-4 mb-md-0">
          <img :src="activity.guest.imageURL" class="img-fluid"
            style="object-fit: cover; width: 100%; max-height: 400px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;"
            alt="Guest Image" />
        </div>

        <!-- Guest Description on the right with border -->
        <div class="col-md-6 p-0">
          <div class="p-4">
            <h2 class="fs-1">{{ activity.guest.name }}</h2>
            <p class="mb-0 lead">{{ activity.guest.description }}</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
