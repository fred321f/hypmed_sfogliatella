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
    <div v-if="loading" class="text-center">
      <loadingSpinner label="Loading activities..." />
    </div>
    <div v-else-if="error" class="alert alert-danger">{{ error.message || error }}</div>
    <div v-else>
      <div class="row">
        <div class="d-flex mb-4 col-12 col-md-6 col-lg-4" v-for="activity in activities" :key="activity.id">

          <Card 
            :type="'vertical'" 
            :title="activity.name" 
            :description="activity.overview" 
            :imageUrl="getImage(activity)"
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

      <div v-if="!activities.length" class="text-center">
        <p>No results found for your search. Try something else.</p>
      </div>
    </div>
  </div>
</template>



<script setup>
import Card from "@/components/cards/Card.vue";
import loadingSpinner from "@/components/loadingSpinner.vue";
import { getImage } from '../utility/getImage';  // <-- import the function

// Accept various filters as props
const props = defineProps({
  name: String,
  type: String,
  types: String,         // space-separated types (e.g. "Yoga Meditation")
  teacher: String,
  teacherID: String,
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

const { data: activities, error, pending: loading } = await useLazyFetch('/api/activitiesFilters', {
  query: computed(() => {
    const params = {};
    if (props.name) params.name = props.name;
    if (props.type) params.type = props.type;
    if (props.teacher) params.teacher = props.teacher;
    if (props.teacherID) params.teacherID = props.teacherID;
    if (props.level) params.level = props.level;
    if (props.description) params.description = props.description;
    if (props.day) params.day = props.day;
    if (props.time) params.time = props.time;
    if (props.sort) params.sort = 'true';
    
    if (props.types) {
      const types = props.types.split(' ').filter(t => t.trim());
      if (types.length === 1) {
        params.type = types[0];
      } else if (types.length > 1) {
        types.forEach((t, index) => {
          params[`type${index === 0 ? '' : index}`] = t;
        });
      }
    }
    
    return params;
  }),
  transform: (result) => {
    if (result.success) {
      return result.data;
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: result.message || 'Failed to fetch activities'
      });
    }
  },
  default: () => []
});
</script>


