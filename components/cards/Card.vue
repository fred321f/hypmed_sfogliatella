<!-- HOW TO USE THIS COMPONENT

// ADD THIS TO THE TOP OF THE PAGE
<script setup>
    import Card from "@/components/cards/Card.vue";
</script>

// ADD THE CARD INSIDE THE PAGE and Change TEACHER to what you need, like this:
<div class="col-md-4" v-for="teacher in teachers" :key="teacher.id">

    <Card 
        :type="'vertical'" 
        :title="TEACHER.name" 
        :description="TEACHER.overview" 
        :imageUrl="TEACHER.imageUrl"
        :buttonText="'Read more'" 
        :linkUrl="'/TEACHERs/' + TEACHER.name" 

        :level="TEACHER.level"
        :taughtBy="TEACHER.taught_by"
        :id="TEACHER.name.replace(/\s+/g, '-').toLowerCase()"
    />

</div>

 -->


<script setup>
import Button from '@/components/btns/mainBtn.vue';
import { ref } from 'vue';
import placeholderImg from '~/assets/img/placeholder.svg';

const props = defineProps({
    type: { type: String, default: 'vertical' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    buttonText: { type: String, default: 'Read more' },
    linkUrl: { type: String, required: false },
    level: { type: String, required: false, default: null },
    taughtBy: { type: String, required: false, default: null },
    location: { type: String, required: false, default: null },
    guest: { type: String, required: false, default: null },
    id: { type: String, required: false, default: null },
    image_alt_text: { type: String, required: false, default: 'Image of content card header' },
});

const imageLoaded = ref(false);
function handleImageLoad() {
  imageLoaded.value = true;
}
</script>

<template>
    <!-- Cards for teacher and activities -->
    <div v-if="type === 'vertical'" :id="id">
        <div class="d-flex justify-content-center col-12">
            <div class="d-flex flex-column shadow-lg m-3 border-0 rounded-4 w-100 h-100 overflow-hidden card">
                <div class="position-relative overflow-hidden">
                    <img v-if="!imageLoaded" :src="placeholderImg" class="card-img-top top-0 position-absolute w-100 h-100 activity-img start-0" :alt="'Placeholder'" style="z-index:1;" format="webp" />
                    <img :src="imageUrl" class="card-img-top activity-img" loading="lazy" alt="Image of {{ title }}" @load="handleImageLoad" :style="!imageLoaded ? 'opacity:0;' : 'opacity:1; z-index:2;'" format="webp" />
                </div>
                <div class="d-flex flex-column justify-content-between card-body">
                    <h1 class="card-title fs-4 fw-bold">{{ title }}</h1>
                    <p class="card-text" style="font-size: 16px; line-height: 2em">{{ description }}</p>
                    <p v-if="level" class="mb-2 text-muted">Suitable for <strong>{{ level }}</strong></p>
                    <p v-if="taughtBy" class="mb-2 text-muted">Taught by:
                        <a :href="`/teachers/${taughtBy}`" class="text-dark text-decoration-none fw-bold">{{ taughtBy }}</a>
                    </p>
                    <p v-if="guest" class="mb-2 text-muted">Special guest: <strong>{{ guest }}</strong></p>
                    <p v-if="location" class="mb-2 text-muted">In <strong>{{ location }}</strong></p>
                    <div class="d-flex justify-content-center mt-auto">
                        <Button :url="linkUrl" :text="buttonText" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Cards for the home page -->
    <div v-else-if="type === 'horizontal'">
        <a :href="linkUrl" class="text-dark text-decoration-none">
            <div class="d-flex justify-content-center col-12">
                <div class="d-flex flex-column flex-md-row align-items-stretch shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card">
                    <div class="position-relative flex-shrink-0 overflow-hidden">
                        <!-- Mobile/tablet -->
                        <img v-if="!imageLoaded" :src="placeholderImg" class="card-img-top top-0 position-absolute w-100 h-100 d-md-none activity-img start-0" :alt="'Placeholder'" style="z-index:1;" format="webp" />
                        <img :src="imageUrl" class="card-img-top d-md-none activity-img" loading="lazy" alt="Image of {{ title }}" @load="handleImageLoad" :style="!imageLoaded ? 'opacity:0;' : 'opacity:1; z-index:2;'" format="webp" />
                        <!-- Desktop -->
                        <img v-if="!imageLoaded" :src="placeholderImg" class="d-md-block top-0 card-img-left position-absolute w-100 h-100 h-100 d-none activity-img start-0" :alt="'Placeholder'" style="z-index:1;" format="webp" />
                        <img :src="imageUrl" class="d-md-block card-img-left h-100 d-none activity-img" loading="lazy" alt="Image of {{ title }}" @load="handleImageLoad" :style="!imageLoaded ? 'opacity:0;' : 'opacity:1; z-index:2;'" format="webp" />
                    </div>
                    <div class="d-flex flex-column justify-content-between h-100 card-body">
                        <h1 class="card-title fs-4 fw-bold">{{ title }}</h1>
                        <p class="card-text" style="font-size: 16px; margin-bottom: 0; line-height: 2em;">{{ description }}</p>
                        <div class="d-flex justify-content-end mt-auto">
                            <a v-if="linkUrl" :href="linkUrl" class="my-link">
                                {{ buttonText }} <i class="bi-arrow-right me-3 bi"></i>
                            </a>
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
        buttonText: {
            type: String,
            default: 'Read more'
        },
        linkUrl: {
            type: String,
            required: false
        },
        // Optional
        level: {
            type: String,
            required: false,
            default: null
        },
        taughtBy: {
            type: String,
            required: false,
            default: null
        },
        location: {
            type: String,
            required: false,
            default: null
        },
        guest: {
            type: String,
            required: false,
            default: null
        },
        id: {                   // for structural link
            type: String,
            required: false,
            default: null
        },
        image_alt_text: {      // for alt text
            type: String,
            required: false,
            default: "Image of content card header"
        },
        // ADD MORE HERE (remember to put required: false)
    }
}
</script>

<style scoped>
.mainCard {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 200px;
    cursor: pointer;
}

.my-link {
    text-decoration: none;
    color: #20c997;
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


.horiCard {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.horiCard.activity-img {
    width: auto;
    height: 200px;
    object-fit: cover;
}

.horiCard:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.horiCard:hover .activity-img {
    transform: scale(1.05);
}


.activity-img {
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-img-left {
    width: 300px;
    height: auto;
    /*max-width: 400px;  Increase this for larger image 
     height: auto;*/
    object-fit: cover;
}

.card:hover .activity-img {
    transform: scale(1.05);
}
</style>