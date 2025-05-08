<!-- HOW TO USE THIS COMPONENT

// ADD THIS TO THE TOP OF THE PAGE
<script setup>
    import HorizontalCard from "@/components/cards/horizontalCard.vue";
</script>

// ADD THE CARD INSIDE THE PAGE and Change TEACHER to what you need
<div class="d-flex justify-content-center col-12">
    <HorizontalCard 
        :title="TEACHER.name" 
        :description="TEACHER.overview" 
        :imageUrl="TEACHER.imageUrl"
        :buttonText="'Read more'" 
        :linkUrl="'/TEACHERs/' + TEACHER.name" 

        :id="TEACHER.name.replace(/\s+/g, '-').toLowerCase()"
    />
</div>

 -->


<script setup>
import Button from '@/components/btns/mainBtn.vue';
</script>

<template>
    <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card horizCard" :id="this.id">
        <div class="overflow-hidden">
            <img :src="this.imageUrl" class="card-img-top activity-img" />
        </div>
        <div class="d-flex flex-column card-body">

            <h5 class="card-title fs-4 fw-bold">{{ this.title }}</h5>
            <p class="card-text">{{ this.description }}</p>

            <p v-if="level" class="text-muted mb-2">Level: {{ level }}</p>
            <p v-if="teacher" class="text-muted mb-2">Taught by: <strong>{{ teacher }}</strong></p>
            
            <!-- ADD MORE HERE (remember to use v-if) -->
            
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
        // ADD MORE HERE
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
