<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Navigation Bar -->
    <!-- <header class="bg-primary border-4 border-bottom">
      <div class="d-flex align-items-center py-4 container">
        <h1 class="me-auto text-white" style="font-size: 40px">Yogatella</h1>
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
        <span class="d-md-inline text-white-50 text-end d-none" style="font-size: 14px">
          Explore yoga, retreats & workshops offered by Yogatella
        </span>
      </div>
    </section>-->

    <!-- Breadcrumb 
    <section class="bg-light py-3 border-bottom">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="mb-0 breadcrumb">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-primary text-decoration-none fw-medium">Home</NuxtLink>
            </li>
            <li class="text-dark breadcrumb-item active fw-bold" aria-current="page">Activities</li>
          </ol>
        </nav>
      </div>
    </section>-->

    <!-- Page Title -->
    <section class="py-5">
      <h2 class="text-center" style="font-size: 50px; font-weight: 600">Activities</h2>
    </section>

    <!-- Introduction Text -->
    <section class="my-5 container">
      <p class="text-center text-justify fs-4" style="line-height: 2em">
        At Yogatella Yoga Center, we offer a diverse range of activities designed to support your physical, mental, and
        spiritual well-being. Our offerings are thoughtfully grouped into three main categories:
      </p>
    </section>

    <!-- Activity Cards -->
    <section class="mb-5 container">
      <div class="row g-4">
        <div class="d-flex col-md-4" v-for="(card, index) in activityCards" :key="index">
          <!-- <div class="shadow-lg border-0 rounded-4 w-100 overflow-hidden card activity-card">
            <div class="overflow-hidden">
              <img :src="card.image" :alt="card.alt" class="card-img-top activity-img" />
            </div>
            <div class="d-flex flex-column card-body">
              <h5 class="card-title fs-4 fw-bold">{{ card.title }}</h5>
              <p class="text-secondary card-text" style="font-size: 16px; line-height: 2em">{{ card.description }}</p>
              <div class="mt-auto">
                <NuxtLink :to="card.link">
                  <button class="rounded-3 w-100 btn btn-success" style="height: 45px">
                    Learn more
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div> -->

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
    </section>

    <!-- Footer -->
    <!-- <footer class="bg-primary mt-auto py-5">
      <div class="text-white container">
        <h3 class="mb-4" style="font-size: 30px">Contact Us</h3>
        <hr class="opacity-75 border-white" />
        <p style="font-size: 18px">
          📍 Address: 123 Zen Lane, Wellness City, EU<br />
          📧 Email: hello@yogatella.com<br />
          ☎️ Phone: +39 123 456 7890
        </p>
        <p class="mt-4">
          © 2025 Developed by <strong>Sfogliatella Team</strong> — All rights reserved.
        </p>
      </div>
    </footer> -->
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


</style>