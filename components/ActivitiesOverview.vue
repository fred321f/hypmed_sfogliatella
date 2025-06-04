<!-- Activities Overview -->

<template> 
  <div>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    
    <div class="row g-4">
      <div class="d-flex col-12 col-md-6 col-lg-4" v-for="(card, index) in filteredCards" :key="index">
        <Card 
          :title="card.title" 
          :description="card.description" 
          :imageUrl="card.image" 
          :linkUrl="card.link" 
          :buttonText="'Read more'" 
          image_alt_text="Activity overview card image of {{ card.title }}"
        />
      </div>
    </div>

  </div>
</template>



<script setup>
import Card from "~/components/cards/Card.vue";
import { computed } from 'vue';

import yoga_img from '~/assets/img/yoga_img.png'
import seminars_img from '~/assets/img/seminars_img.png'
import retreats_img from '~/assets/img/retreats_img.png'

const props = defineProps({
  hide: {
    type: String,
    default: ''
  }
});

const filteredCards = computed(() => {
  return activityCards.filter(card => card.title !== props.hide);
});

// Activity cards data
const activityCards = [
  {
    title: "Yoga and meditation courses",
    image: yoga_img,
    description:
      "We offer yoga and meditation classes suitable for all levels—from complete beginners to seasoned practitioners, each guided by experienced instructors.",
    alt: "Group yoga class with people in various poses",
    link: "/courses",
  },
  {
    title: "Seminars and workshops",
    image: seminars_img,
    description:
      "Expand your knowledge and skills with our seminars and workshops, led by experts in yoga, wellness, and holistic health. Topics range from anatomy and alignment to nutrition and personal development. These events are open to practitioners and professionals alike, providing a rich learning environment and opportunities for personal growth.",
    alt: "Yoga workshop session",
    link: "/seminars",
  },
  {
    title: "Retreats",
    image: retreats_img,
    description:
      "Escape the noise and reconnect with yourself through our transformative yoga retreats, held in serene natural settings. Whether it's a weekend getaway or a week-long immersion, our retreats combine daily yoga and meditation sessions with nourishing meals, nature excursions, and time for reflection.",
    alt: "Yoga retreat with people practicing in a scenic location",
    link: "/retreats",
  }
];
</script>


