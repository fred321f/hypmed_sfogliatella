<script setup>

import Button from '@/components/btns/mainBtn.vue';

</script>

<template>
    <div v-if="this.type === 'vertical'">
        <div class="d-flex justify-content-center col-12">
        <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card vertiCard">
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
    </div>
    </div>
    <div v-else-if="this.type === 'horizontal'">
        <a :href="this.linkUrl" class="text-dark text-decoration-none">
            <div class="d-flex justify-content-center col-12">
                <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card horiCard">
                    <div class="d-flex">
                        <div class="flex-shrink-0 overflow-hidden">
                            <img :src="this.imageUrl" class="card-img-left activity-img" />
                        </div>
                        <div class="d-flex flex-column card-body">
                            <h5 class="card-title fs-4 fw-bold">{{ this.title }}</h5>
                            <p class="card-text" style="font-size: 16px; line-height: 2em">{{ this.description }}</p>
                            <div class="justify-content-center mt-auto row">
                                <div class="col"></div>
                                <div class="col"></div>
                                <div class="d-flex justify-content-center mr-5 col">
                                    <a :href="this.linkUrl" class="lead" style="height: 45px; text-decoration: none;">
                                        {{ this.buttonText }} <i class="bi-arrow-right bi"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
// Props
export default {
    name: 'Card',
    props: {
        type: {
            type: String,
            default: 'vertical'
        },
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
.mainCard {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 200px;
    cursor: pointer;
}

.horiCard:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.activity-img {
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-img-left {
    width: 300px;
    /* Increased width for a larger image */
    height: auto;
    object-fit: cover;
}

.horiCard:hover .activity-img {
    transform: scale(1.05);
}

.vertiCard {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vertiCard.activity-img {
    width: auto;
    height: 200px;
    object-fit: cover;
}

.vertiCard:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
.vertiCard:hover .activity-img {
    transform: scale(1.05);
}
</style>