<!-- Fetching from the db -->
<script setup>
import loadingSpinner from './loadingSpinner.vue';
import Card from "~/components/cards/Card.vue";
const { data: teachers, error, pending: loading } = await useLazyFetch('/api/teachers', {
  transform: (result) => {
    if (result.success) {
      return result.data;
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: result.message || 'Failed to fetch teachers'
      });
    }
  },
  default: () => []
});
</script>

<template>
    <div v-if="loading" class="text-center">
        <loadingSpinner label="Loading teachers..." />
    </div>
    <div v-else-if="error" class="text-center">
        <p class="text-danger">Failed to load teachers. Please try again later.</p>
    </div>
    <div v-else>
        <div class="row g-4">
            <div class="col-md-4" v-for="teacher in teachers" :key="teacher.id">
                <Card :type="'vertical'" :title="teacher.name" :description="teacher.overview" :imageUrl="teacher.imageUrl"
                    :linkUrl="'/teachers/' + teacher.name" :buttonText="'Read more'" />
            </div>
        </div>
        <br>
        <div v-if="!teachers.length" class="text-center">
            <p class="text-danger">No teachers available at the moment.</p>
        </div>
    </div>
</template>
