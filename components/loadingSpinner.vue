<template>
    <div class="m-5 text-primary spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
        <div v-if="text" class="spinner-border" role="status">
            <span class="text-muted text-center">{{ label }}</span>
        </div>
    </div>
</template>

<script>

export default {
    name: 'loadingSpinner',
    props: {
        label: {
            type: String,
            required: false
        }
    }
};
</script>