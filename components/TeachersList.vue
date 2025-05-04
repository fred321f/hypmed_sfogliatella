<!-- Fetching from the db -->
<script>
export default {
    data() {
        return {
            teachers: [],
            error: null, // Add an error state
        };
    },
    async created() {
        try {
            const response = await fetch('/api/teachers');
            if (!response.ok) {
                throw new Error('Failed to fetch teachers');
            }
            const result = await response.json();
            if (result.success) {
                this.teachers = result.data;
            } else {
                throw new Error(result.message || 'Unknown error occurred');
            }
        } catch (error) {
            console.error(error);
            this.error = error.message; // Set the error state
        }
    }
};
</script>

<template>
    <div class="row">
        <div class="col-md-4" v-for="teacher in teachers" :key="teacher.id">
            <div class="mb-3 card">
                <img :src="teacher.imageUrl" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ teacher.name }}</h5>
                    <p class="card-text">{{ teacher.description }}</p>
                    <div class="gap-2 d-grid">
                        <router-link :to="`/teachers/${teacher.name}`" class="text-light btn btn-primary">Read more</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!teachers.length" class="text-center">
        <p class="text-danger">No teachers available at the moment.</p>
    </div>
    <div v-else-if="error" class="text-center">
        <p class="text-danger">Failed to load teachers. Please try again later.</p>
    </div>
</template>
