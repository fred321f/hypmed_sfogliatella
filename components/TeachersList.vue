<!-- Fetching from the db -->
<script setup>
import Button from '~/components/btns/mainBtn.vue';
import VerticalCard from "~/components/cards/verticalCard.vue";

import Card from "~/components/cards/Card.vue";

</script>

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
            <Card :type="'vertical'" :title="teacher.name" :description="teacher.overview" :imageUrl="teacher.imageUrl"
                :linkUrl="'/teachers/' + teacher.name" :buttonText="'Read more'" />
        </div>
    </div>
    <div v-if="!teachers.length" class="text-center">
        <p class="text-danger">No teachers available at the moment.</p>
    </div>
    <div v-else-if="error" class="text-center">
        <p class="text-danger">Failed to load teachers. Please try again later.</p>
    </div>
</template>
