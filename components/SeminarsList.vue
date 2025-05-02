<!-- To add in a page you need to add:
<script setup>
    import CoursesList from '~/components/CoursesList.vue';
</script>

<template>
    ...
    <CoursesList type="Yoga" />
    ...
</template>
-->

<template>
  <div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div class="row">
      <div class="col-md-4" v-for="seminar in seminars" :key="seminar.id">
        <div class="mb-3 card">
          <img 
            :src="getSeminarImage(seminar)" 
            class="card-img-top" 
            alt="Seminar Image" 
          />
          <div class="card-body">
            <h5 class="card-title">{{ seminar.name }}</h5>
            <p class="card-text">{{ seminar.description }}</p> 
            <h6 class="text-muted">Led by: <strong>{{ seminar.heldBy }}</strong></h6> <!-- ADD RELATED LINK!!!!!!!! -->
            <div class="gap-2 d-grid">
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!seminars.length && !error" class="text-center">
      <p class="text-danger">No seminars available at the moment.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const seminars = ref([]);
const error = ref(null);

const getSeminarImage = (seminar) => {
  return seminar.imageUrl || 'https://cdn.yogaacademy.it/wp-content/uploads/2024/01/fless.png';
};

onMounted(async () => {
  try {
    const response = await fetch('/api/seminars');
    const result = await response.json();
    if (result.success) {
      seminars.value = result.data;
    } else {
      throw new Error(result.message || 'Unknown error');
    }
  } catch (err) {
    error.value = err.message;
  }
});
</script>
