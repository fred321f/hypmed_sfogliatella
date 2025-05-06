<script setup>

import Button from '@/components/btns/mainBtn.vue';

</script>

<template>
    <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card activity-card">
        <div class="overflow-hidden">
            <img :src="this.imageUrl" class="card-img-top activity-img" />
        </div>
        <div class="d-flex flex-column card-body">
            <h5 class="card-title fs-4 fw-bold">{{ this.title }}</h5>
            <p class="text-secondary card-text" style="font-size: 16px; line-height: 2em">{{ this.description }}</p>
            <div class="d-flex justify-content-center mt-auto row">

                <Button :url="this.linkUrl" :text="this.buttonText" />
            </div>
        </div>
    </div>
</template>

<script>
// Props
export default {
    name: 'HorizontalCard',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        linkUrl: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            default: 'Read more'
        }
    }
}
</script>