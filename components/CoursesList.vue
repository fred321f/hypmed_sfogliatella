<!-- To add in a page you need to add:
<script setup>
    import CoursesList from '~/components/CoursesList.vue';
</script>

<template>
    ...
    <CoursesList type="Yoga" />
    ...
</template>

N.B. Remember also to change the realated server/api/courses.ts if needed
-->

<template>  <!-- THIS VERSION ADD STRUCTURAL LINKS ####################### -->
  <div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    
    <div class="row">
      <div class="col-md-4" v-for="course in courses" :key="course.id">
        <!-- ID for the Structural Link from calendar -->
        <div class="mb-3 card" :id="course.name.replace(/\s+/g, '-').toLowerCase()">
           <!-- Image for each course with conditional default image based on type -->
          <img 
            :src="getCourseImage(course)" 
            class="card-img-top" 
            alt="Course Image" 
          />
          <div class="card-body">
            <h4 class="card-title">{{ course.name }}</h4>
            <p class="card-text">{{ course.description }}</p>
            <h6 class="text-muted">Led by: <strong>{{ course.taught_by }}</strong></h6> <!-- ADD RELATED LINK!!!!!!!! -->
            <div class="gap-2 d-grid">
              <button class="btn btn-primary" type="link">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!courses.length && !error" class="text-center">
      <p class="text-danger">No courses available at the moment.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});


const courses = ref([]);
const error = ref(null);

// Function to determine the image URL based on course type and availability
const getCourseImage = (course) => {
  // If the course has a valid imageUrl, use it
  if (course.imageUrl) {
    return course.imageUrl;
  }

  // Check course type and return the respective default image
  if (course.type === 'Yoga') {
    return 'https://cdn.yogaacademy.it/wp-content/uploads/2022/10/DSC00991-scaled.jpeg';
  }

  if (course.type === 'Meditation') {
    return 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  // Fallback default if the type is unknown or image is missing
  return 'https://cdn.yogaacademy.it/wp-content/uploads/2024/01/fless.png'; // generic default image
};

onMounted(async () => {
  try {

    let url = '/api/courses'; // Default API endpoint 

    if (props.type) {
      url += `?type=${props.type}`; // Add type filter
    }
    const response = await fetch(url);
    const result = await response.json();
    if (result.success) {
      courses.value = result.data;
    } else {
      throw new Error(result.message || 'Unknown error');
    }
  } catch (err) {
    error.value = err.message;
  }
});
</script>
