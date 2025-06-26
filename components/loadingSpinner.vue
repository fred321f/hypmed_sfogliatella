<template>
    <div class="d-flex flex-column align-items-center m-5">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-if="label" class="mt-2 text-muted text-center">{{ label }}</div>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: false
    }
});
</script>