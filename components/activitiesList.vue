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
          :level="activity.level"
          :activityType="activity.type"
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
import { ref, watch, onMounted } from 'vue';

// Accept the type as a prop for filtering
const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});

const activities = ref([]);
const error = ref(null);

// ⬇️ Extracted fetch function to be reused in both onMounted and watch
const fetchActivities = async () => {
  try {
    let url = '/api/activities';

    if (props.type) {
      url += `?type=${encodeURIComponent(props.type)}`;
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
};

// Fetch on initial load
onMounted(fetchActivities);

// Reactively refetch when `type` prop changes
watch(() => props.type, fetchActivities);

// 🔁 Utility to get an image URL for each activity
const getCourseImage = (activity) => {
  if (activity.imageUrl) return activity.imageUrl;

  if (activity.type === 'Yoga') {
    return 'https://cdn.yogaacademy.it/wp-content/uploads/2022/10/DSC00991-scaled.jpeg';
  }

  if (activity.type === 'Meditation') {
    return 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2202&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  return 'https://cdn.yogaacademy.it/wp-content/uploads/2024/01/fless.png';
};
</script>

