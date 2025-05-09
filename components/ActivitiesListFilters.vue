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
      <p>No results found for your search. Try something else.</p>
    </div>
  </div>
</template>



<script setup>
import Card from "@/components/cards/Card.vue";
import { ref, watch, onMounted } from 'vue';

// Accept various filters as props
const props = defineProps({
  name: String,
  type: String,
  types: String,         // space-separated types (e.g. "Yoga Meditation")
  teacher: String,
  level: String,
  description: String,
  overview: String,
  day: String,
  time: String,
  sort: {
    type: Boolean,
    default: false
  }
});

const activities = ref([]);
const error = ref(null);

// Build dynamic query string from props
const buildQuery = () => {
  const params = new URLSearchParams();

  if (props.name) params.append('name', props.name);
  if (props.type) params.append('type', props.type);
  if (props.teacher) params.append('teacher', props.teacher);
  if (props.level) params.append('level', props.level);
  if (props.description) params.append('description', props.description);
  if (props.day) params.append('day', props.day);
  if (props.time) params.append('time', props.time);
  if (props.sort) params.append('sort', 'true');

  if (props.types) {
    props.types.split(' ').forEach(t => {
      if (t.trim()) params.append('type', t.trim());
    });
  }
  
  return params.toString();
};

const fetchActivities = async () => {
  try {
    let url = '/api/activitiesFilters'; // API endpoint for fetching activities
    const query = buildQuery();
    if (query) {
      url += `?${query}`;
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

// Reactively refetch when any prop changes
watch(() => ({ ...props }), fetchActivities, { deep: true });

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


