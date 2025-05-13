<script setup>
import ActivitiesList from '~/components/ActivitiesListFilters.vue';

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import loadingSpinner from '@/components/loadingSpinner.vue';

const route = useRoute();
const teacher = ref(null);
const error = ref(null);
const loading = ref(true); // Add a loading state

onMounted(async () => {
    try {
        const response = await fetch(`/api/teachers?name=${route.params.name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch teacher details');
        }
        const result = await response.json();
        if (result.success) {
            teacher.value = result.data;
        } else {
            throw new Error(result.message || 'Unknown error occurred');
        }
    } catch (err) {
        console.error(err);
        error.value = err.message;
    } finally {
        loading.value = false; // Set loading to false after fetching
    }
});
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