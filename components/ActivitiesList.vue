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
      <div class="row g-4">
        <div class="d-flex mb-4 col-12 col-md-6 col-lg-4" v-for="activity in activities" :key="activity.id">

          <Card 
            :type="'vertical'" 
            :title="activity.name" 
            :description="activity.overview" 
            :imageUrl="getImage(activity)"
            :buttonText="'Read more'" 
            :linkUrl="'/activities/' + activity.name"
            image_alt_text="Activity overview card image of {{ activity.title }}"

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
        <p class="text-danger">No activities available at the moment.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/cards/Card.vue";
import loadingSpinner from "@/components/loadingSpinner.vue";
import { getImage } from '../utility/getImage';  // <-- to load the image from the server

const props = defineProps({
  type: {
    type: String,
    default: ''
  },
  highlights: {
    type: Boolean,
    default: false
  }
});

const { data: activities, error, pending: loading } = await useLazyFetch('/api/activities', {
  query: {
    ...(props.type && { type: props.type }),
    ...(props.highlights !== null && { highlights: props.highlights })
  },
  transform: (result) => {
    if (result.success) {
      return result.data;
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: result.message || 'Unknown error'
      });
    }
  },
  default: () => []
});
</script>
