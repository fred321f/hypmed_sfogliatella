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
    <div v-else-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-else>
      <div class="row">
        <div class="mb-4 col-md-4" v-for="activity in activities" :key="activity.id">

          <Card :type="'vertical'" :title="activity.name" :description="activity.overview"
            :imageUrl="getImage(activity)" :buttonText="'Read more'" :linkUrl="'/activities/' + activity.name"
            image_alt_text="Activity overview card image of {{ activity.title }}" :taughtBy="activity.teacher"
            :guest="activity.guest" :location="activity.location" :id="activity.name.replace(/\s+/g, '-').toLowerCase()"
            :level="activity.level" :activityType="activity.type" />

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
import { ref, onMounted } from 'vue';

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

const activities = ref([]);
const error = ref(null);
const loading = ref(true);

onMounted(async () => {
  try {
    let url = '/api/activities';
    const params = [];

    if (props.type) {
      params.push(`type=${encodeURIComponent(props.type)}`);
    }

    if (props.highlights !== null) {
      params.push(`highlights=${props.highlights}`);
    }

    if (params.length) {
      url += `?${params.join('&')}`;
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
  } finally {
    loading.value = false;
  }
});
</script>
