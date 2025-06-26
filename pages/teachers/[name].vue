<script setup>
import ActivitiesList from '~/components/ActivitiesListFilters.vue';
import loadingSpinner from '@/components/loadingSpinner.vue';
import { useHead } from '#imports';

const route = useRoute();


const { data: teacher, error, pending: loading } = await useLazyFetch('/api/teachers', {
  query: {
    name: route.params.name
  },
  transform: (result) => {
    if (result.success) {
      return result.data;
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: result.message || 'Teacher not found'
      });
    }
  }
});

useHead({
  title: teacher.value ? `${teacher.value.name} - Yoga Teacher | YogaTella` : 'Yoga Teacher | YogaTella',
  meta: [
    { name: 'description', content: teacher.value ? `Learn more about ${teacher.value.name}, one of our expert yoga teachers at YogaTella.` : 'Meet our expert yoga teachers at YogaTella.' }
  ]
})
</script>

<template>
    <div v-if="loading" class="text-center">
        <loadingSpinner />
    </div>
    <div v-else-if="error" class="text-center">
        <p class="text-danger">{{ error }}</p>
    </div>
    <div v-else class="container">
        <h1 class="my-5 text-center display-1">{{ teacher.name }}</h1>

        <div class="row">
            <div class="col-12 col-md-6">
                <img :src="teacher.imageUrl" alt="{{ teacher.name }}" class="mb-4 img-fluid image-container" />
            </div>

            <div class="col-12 col-md-6">
                <p class="lead"><strong>{{ teacher.overview }}</strong></p>    <!-- Better to remove it? -->
                <p class="lead">{{ teacher.description }}</p>
            </div>
        </div>
        <div class="row">
            <h2 class="my-3 display-4">Join my classes</h2>
            <!-- Classes list -->
            <ActivitiesList :teacherID="teacher._id" types="Yoga Meditation" />
        </div>

        <div class="row">
            <h2 class="my-3 display-4">My other activities</h2>
            <!-- List of other activities -->
            <ActivitiesList :teacherID="teacher._id" types="Seminar Workshop Retreat" />
        </div>
    </div>
</template>