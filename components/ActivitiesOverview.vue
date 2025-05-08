<!-- Activities Overview -->

<template> 
  <div>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    
    <div class="row g-4">
      <div class="d-flex col-md-4" v-for="(card, index) in activityCards" :key="index">
        <div class="col">
          <Card 
            :title="card.title" 
            :description="card.description" 
            :imageUrl="card.image" 
            :linkUrl="card.link" 
            :buttonText="'Read more'" 
          />
        </div>
      </div>
    </div>

  </div>
</template>



<script setup>
import Card from "~/components/cards/Card.vue";

// Activity cards data
const activityCards = [
  {
    title: "Yoga and meditation courses",
    image: "https://res.cloudinary.com/dpba22oef/image/upload/v1746227126/medi_itfcqf.png",
    description:
      "We offer yoga and meditation classes suitable for all levels—from complete beginners to seasoned practitioners, each guided by experienced instructors.",
    alt: "Group yoga class with people in various poses",
    link: "/courses",
  },
  {
    title: "Seminars and workshops",
    image: "https://res.cloudinary.com/dpba22oef/image/upload/v1746227629/semi_uh0ioh.png",
    description:
      "Expand your knowledge and skills with our seminars and workshops, led by experts in yoga, wellness, and holistic health. Topics range from anatomy and alignment to nutrition and personal development. These events are open to practitioners and professionals alike, providing a rich learning environment and opportunities for personal growth.",
    alt: "Yoga workshop session",
    link: "/seminars",
  },
  {
    title: "Retreats",
    image: "https://res.cloudinary.com/dpba22oef/image/upload/v1746227126/retreats_aknjvd.png",
    description:
      "Escape the noise and reconnect with yourself through our transformative yoga retreats, held in serene natural settings. Whether it's a weekend getaway or a week-long immersion, our retreats combine daily yoga and meditation sessions with nourishing meals, nature excursions, and time for reflection.",
    alt: "Yoga retreat with people practicing in a scenic location",
    link: "/retreats",
  }
];
</script>


