<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navigation Bar -->
    <!-- <header class="bg-primary border-bottom border-4">
      <div class="container d-flex align-items-center py-4">
        <h1 class="text-white me-auto" style="font-size: 40px">Yogatella</h1>
        <nav class="d-flex gap-2">
          <button v-for="(item, index) in navItems" :key="index" class="btn"
            :class="item.active ? 'btn-outline-light bg-light text-dark border-4' : 'btn-outline-light text-white'"
            style="width: 174px; height: 60px; font-size: 25px">
            {{ item.name }}
          </button>
        </nav>
      </div>
    </header> -->

    <!-- Status Bar 
    <section class="bg-status shadow-sm px-4 py-2 text-white">
      <div class="d-flex align-items-center justify-content-between container">
        <span class="fw-medium">
          🧘 You're viewing: <strong>Activities</strong>
        </span>
        <span class="text-end d-none d-md-inline text-white-50" style="font-size: 14px">
          Explore yoga, retreats & workshops offered by Yogatella
        </span>
      </div>
    </section>-->

    <!-- Breadcrumb 
    <section class="bg-light py-3 border-bottom">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-decoration-none text-primary fw-medium">Home</NuxtLink>
            </li>
            <li class="breadcrumb-item active text-dark fw-bold" aria-current="page">Activities</li>
          </ol>
        </nav>
      </div>
    </section>-->

    <!-- Page Title -->

    <!-- Introduction Text -->
    <section class="my-5 container">
      <p class="text-center text-justify fs-4" style="line-height: 2em">
        At Yogatella Yoga Center, we offer a diverse range of activities designed to support your physical, mental, and
        spiritual well-being. Our offerings are thoughtfully grouped into three main categories:
      </p>
    </section>

    <!-- Activity Cards -->
    <section class="container mb-5">
      <div class="row g-4 d-flex justify-content-center">
        <div class="col-md-4 d-flex" v-for="(card, index) in activityCards" :key="index">
          <div class="card activity-card border-0 shadow-lg w-100 rounded-4 overflow-hidden">
            <div class="overflow-hidden">
              <img :src="card.image" :alt="card.alt" class="card-img-top activity-img" />
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title fs-4 fw-bold">{{ card.title }}</h5>
              <p class="card-text " style="font-size: 16px; line-height: 2em">{{ card.description }}</p>
              <div class="mt-auto">
                <NuxtLink :to="card.link">
                  <button class="btn-main w-100" @click="navigate">
                    learn more
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- <div class="col">
            <Card 
              :title="card.title" 
              :description="card.description" 
              :imageUrl="card.image" 
              :linkUrl="card.link" 
              :buttonText="'Read more'" 
            />
          </div> -->

        </div>
      </div>
    </section>

    <Chatbot />
  </div>
</template>

<script setup>
import Card from "~/components/cards/Card.vue";

// Navigation bar data
const navItems = [
  { name: "About us", active: false },
  { name: "Activities", active: true },
  { name: "Teachers", active: false },
  { name: "Highlights", active: false },
];

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
    title: "Retreats",
    image: "https://res.cloudinary.com/dpba22oef/image/upload/v1746227126/retreats_aknjvd.png",
    description:
      "Escape the noise and reconnect with yourself through our transformative yoga retreats, held in serene natural settings. Whether it's a weekend getaway or a week-long immersion, our retreats combine daily yoga and meditation sessions with nourishing meals, nature excursions, and time for reflection.",
    alt: "Yoga retreat with people practicing in a scenic location",
    link: "/seminars",
  },
  {
    title: "Seminars and workshops",
    image: "https://res.cloudinary.com/dpba22oef/image/upload/v1746227629/semi_uh0ioh.png",
    description:
      "Expand your knowledge and skills with our seminars and workshops, led by experts in yoga, wellness, and holistic health. Topics range from anatomy and alignment to nutrition and personal development. These events are open to practitioners and professionals alike, providing a rich learning environment and opportunities for personal growth.",
    alt: "Yoga workshop session",
    link: "/courses",
  },
];
</script>

<style scoped>
.bg-primary {
  background-color: #00695c !important;
}

.bg-light {
  background-color: #e0f2f1 !important;
}

.bg-status {
  background-color: #004d40;
  font-size: 16px;
}

.activity-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.activity-img {
  transition: transform 0.5s ease;
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.activity-card:hover .activity-img {
  transform: scale(1.05);
}
</style>

