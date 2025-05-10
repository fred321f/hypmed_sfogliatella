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

<template> 
  <div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    
    <div class="row">
      <div class="col-md-4 mb-4" v-for="activity in activities" :key="activity.id">

        <Card 
          :type="'vertical'" 
          :title="activity.name" 
          :description="activity.overview" 
          :imageUrl="getCourseImage(activity)"
          :buttonText="'Read more'" 
          :linkUrl="'/activities/' + activity.name" 

          :taughtBy="activity.teacher"
          :guest="activity.guest"
          :location="activity.location"
          :id="activity.name.replace(/\s+/g, '-').toLowerCase()"
        />
        
      </div>
    </div>

    <div v-if="!activities.length && !error" class="text-center">
      <p class="text-danger">No activities available at the moment.</p>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/cards/Card.vue";

import { ref, onMounted } from 'vue';

// for FILTERING
const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});


const activities = ref([]);
const error = ref(null);

// Function to determine the image URL based on course type and availability
const getCourseImage = (activity) => {
  // CORRECT imageUrl IMG
  if (activity.imgURL) {
    return 'https://res.cloudinary.com/dpba22oef/image/upload/w_1000,ar_3:2,c_fill,g_auto/'+activity.imgURL;
  }

  // DEFAULT TYPE IMAGE
  if (activity.type === 'Yoga') {
    return 'https://cdn.yogaacademy.it/wp-content/uploads/2022/10/DSC00991-scaled.jpeg';
  }
  if (activity.type === 'Meditation') {
    return 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  // General DEFAULT IMAGE
  return 'https://cdn.yogaacademy.it/wp-content/uploads/2024/01/fless.png'; // generic default image
};

onMounted(async () => {
  try {

    let url = '/api/activities'; // Default API endpoint 

    if (props.type) {
      url += `?type=${props.type}`; // Add type filter
    }
    const response = await fetch(url);
    const result = await response.json();
    if (result.success) {
      activities.value = result.data;
    } else {
      throw new Error(result.message || 'Unknown error');
    }
  } catch (err) {
    error.value = err.message;
  }
});
</script>
