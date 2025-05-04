<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const teacher = ref(null);
const error = ref(null);

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
    }
});
</script>

<template>
    <div class="container" v-if="teacher">
        <h1 class="my-5 text-center display-1">{{ teacher.name }}</h1>

        <div class="row">
            <div class="col">
                <p class="lead">{{ teacher.description }}</p>
            </div>
            <div class="col">
                <img :src="teacher.imageUrl" alt="{{ teacher.name }}" class="mb-4 img-fluid image-container" />
            </div>
        </div>
        <div class="row">
            <h2 class="my-3 display-4">Join my classes</h2>
            <!-- Classes list -->
        </div>

        <div class="row">
            <h2 class="my-3 display-4">My other activities</h2>
            <!-- List of other activities -->
        </div>

    </div>
    <div v-else-if="error" class="text-center">
        <p class="text-danger">{{ error }}</p>
    </div>
    <div v-else class="text-center">
        <p>Loading...</p>
    </div>
</template>