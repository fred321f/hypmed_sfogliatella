<!-- HOW TO USE THIS COMPONENT

// ADD THIS TO THE TOP OF THE PAGE
<script setup>
    import HorizontalCard from "@/components/cards/horizontalCard.vue";
</script>

// ADD THE CARD INSIDE THE PAGE
<div class="d-flex justify-content-center col-12">
    <HorizontalCard 
        :title="teacher.name" 
        :description="teacher.overview" 
        :imageUrl="teacher.imageUrl"
        :buttonText="'Read more'" 
        :linkUrl="'/teachers/' + teacher.name" 

        :id="teacher.name.replace(/\s+/g, '-').toLowerCase()"
    />
</div>

 -->


<script setup>
import Button from '@/components/btns/mainBtn.vue';
</script>

<template>
    <div v-if="this.type === 'vertical'">

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
                                    <a :href="this.linkUrl" class="" style="height: 45px; text-decoration: none;">
                                        {{ this.buttonText }} <i class="bi-arrow-right bi"></i>
                                    </a>
                                </div>
                            </div>

                            <!-- ADDING NEW ELEMENTS HERE -->
                            <div v-if="this.showDifficulty" class="mt-2 text-secondary">
                                <!-- Conditional rendering for if if showDifficulty is true -->
                                <strong>Difficulty:</strong> {{ this.difficulty }}
                            </div>
                            <div v-if="this.showTeacher" class="mt-2 text-secondary">
                                <!-- Conditional rendering for if if showTeacher is true -->
                                <strong>Teacher:</strong> {{ this.teacher }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div v-else-if="this.type === 'horizontal'">
        <div class="d-flex justify-content-center col-12">
            <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card vertiCard">
                <div class="overflow-hidden">
                    <img :src="this.imageUrl" class="card-img-top activity-img" />
                </div>
                <div class="d-flex flex-column card-body">
                    <h5 class="card-title fs-4 fw-bold">{{ this.title }}</h5>
                    <p class="card-text" style="font-size: 16px; line-height: 2em">{{ this.description }}</p>
                    <!-- ADDING NEW ELEMENTS HERE -->
                    <div v-if="this.showDifficulty" class="mt-2 text-secondary">
                        <!-- Conditional rendering for if if showDifficulty is true -->
                        <strong>Difficulty:</strong> {{ this.difficulty }}
                    </div>
                    <div v-if="this.showTeacher" class="mt-2 text-secondary">
                        <!-- Conditional rendering for if if showTeacher is true -->
                        <strong>Teacher:</strong> {{ this.teacher }}
                    </div>
                    <div class="d-flex justify-content-center mt-auto">
                        <Button :url="this.linkUrl" :text="this.buttonText" class="w-100" />
                    </div>
                </div>
    <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card horizCard" :id="this.id">
        <div class="overflow-hidden">
            <img :src="this.imageUrl" class="card-img-top activity-img" />
        </div>
        <div class="d-flex flex-column card-body">

            <h5 class="card-title fs-4 fw-bold">{{ this.title }}</h5>
            <p class="card-text">{{ this.description }}</p>

            <p v-if="level" class="mb-2 text-muted">Level: {{ level }}</p>
            <p v-if="teacher" class="mb-2 text-muted">Taught by: <strong>{{ teacher }}</strong></p>
            
            <div class="d-flex justify-content-center mt-auto">
                <Button :text="this.buttonText" :url="this.linkUrl" class="w-100" />
            </div>

        </div>
    </div>
</template>

<script>
// Props
export default {
    name: 'HorizontalCard',
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
            required: true
        },
        // Optional
        level: {
            type: String,
            required: false,
            default: null
        },
        teacher: {
            type: String,
            required: false,
            default: null
        },
        id: {                   // for structural link
            type: String,
            required: false,
            default: null
        }
    }
}
</script>

<style scoped>
.card-text {
    font-size: 16px;
    /*line-height: 2em;*/
    margin-bottom: 1em;
    margin-top: 1em;
}

.horizCard {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
</style>