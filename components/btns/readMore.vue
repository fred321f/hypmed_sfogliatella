<template>
    <button class="btn-main" :href="url">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        },
        text: {
            type: String,
            default: 'Read more'
        }
    }
};
</script>