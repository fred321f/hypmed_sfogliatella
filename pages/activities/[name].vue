<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const course = ref(null);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await fetch(`/api/courses?name=${route.params.name}`);
    if (!res.ok) throw new Error('Failed to fetch course');

    const result = await res.json();
    if (result.success) {
      course.value = result.data;
    } else {
      throw new Error(result.message || 'Unknown error');
    }
  } catch (err) {
    error.value = err.message;
  }
});
</script>

<template>
  <div class="container my-5">
    <div v-if="course" class="row">
      <div class="col-md-6">
        <img :src="`https://res.cloudinary.com/dpba22oef/image/upload/${course.imgURL}`" class="img-fluid rounded" />
      </div>
      <div class="col-md-6">
        <h1 class="display-4">{{ course.name }}</h1>
        <p class="lead">{{ course.desc || 'No detailed description available.' }}</p>
        <ul class="list-group">
          <li class="list-group-item"><strong>Teacher:</strong> {{ course.teacher?.name || 'N/A' }}</li>
          <li class="list-group-item"><strong>Location:</strong> {{ course.location || 'Studio A' }}</li>
          <li class="list-group-item"><strong>Day:</strong> {{ course.day }}</li>
          <li class="list-group-item"><strong>Time:</strong> {{ course.time }}</li>
          <li class="list-group-item"><strong>Level:</strong> {{ course.level }}</li>
        </ul>
      </div>
    </div>

    <div v-else-if="error" class="alert alert-danger text-center">{{ error }}</div>
    <div v-else class="text-center">Loading course...</div>
  </div>
</template>
