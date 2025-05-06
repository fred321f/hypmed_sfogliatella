<script setup>

import Button from '@/components/btns/mainBtn.vue';

</script>

<template>
    <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card horizCard">
        <div class="overflow-hidden">
            <img :src="this.imageUrl" class="card-img-top activity-img" />
        </div>
        <div class="d-flex flex-column card-body">
            <h5 class="card-title fs-4 fw-bold">{{ this.title }}</h5>
            <p class="card-text" style="font-size: 16px; line-height: 2em">{{ this.description }}</p>
            <div class="d-flex justify-content-center mt-auto">

                <Button :url="this.linkUrl" :text="this.buttonText" class="w-100" />
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

<style scoped>
.horizCard {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.horizCard:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.activity-img {
  transition: transform 0.5s ease;
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.horizCard:hover .activity-img {
  transform: scale(1.05);
}
</style>
