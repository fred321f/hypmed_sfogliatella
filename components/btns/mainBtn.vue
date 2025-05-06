<template>
    <button class="btn-main" @click="navigate">
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
    },
    methods: {
        navigate() {
            window.location.href = this.url;
        }
    }
};
</script>
