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

<template> <!-- THIS VERSION ADD STRUCTURAL LINKS ####################### -->
  <div>
    <div v-if="loading" class="text-center">
      <loadingSpinner label="Loading courses..." />
    </div>
    <div v-else-if="error" class="text-center">
      <p class="text-danger">Failed to load courses. Please try again later.</p>
    </div>

    <div v-else>
      <div class="row">
        <div class="mb-4 col-md-4" v-for="course in courses" :key="course.id">

          <Card :type="'vertical'" :title="course.name" :description="course.description"
            :imageUrl="getCourseImage(course)" :buttonText="'Read more'" :linkUrl="'/courses/' + course.name"
            :level="course.level" :taughtBy="course.teacher?.name || 'Unknown'"
            :id="course.name.replace(/\s+/g, '-').toLowerCase()" />

        </div>
      </div>

      <div v-if="!courses.length" class="text-center">
        <p class="text-danger">No courses available at the moment.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/cards/Card.vue";
import loadingSpinner from "@/components/loadingSpinner.vue";
import { ref, onMounted } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});

const courses = ref([]);
const error = ref(null);
const loading = ref(true);

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
  } finally {
    loading.value = false;
  }
});
</script>
