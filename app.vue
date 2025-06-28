<script>
import './assets/css/custom-bootstrap.scss';

import { useRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./pages/index.vue')
  },
  {
    path: '/teachers',
    component: () => import('./pages/teachers/index.vue')
  },

];

</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Header -->
    <header>
      <nav class="bg-transparent my-2 navbar navbar-expand-lg">
        <div class="container">

          <NuxtLink to="/" class="d-flex align-items-center navbar-brand">
            <img
              src="/favicon.ico"
              alt="YogaTella Brand Logo"
              class="me-2"
              style="height:36px;width:36px;object-fit:contain;"
            />
            <span class="fw-normal">YogaTella</span>
          </NuxtLink>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="ms-auto mb-2 mb-lg-0 navbar-nav">
              <li class="nav-item">
                <NuxtLink to="/activities" class="mx-1 mx-lg-2 hover-underline-animation nav-link">Activities</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/highlights" class="mx-1 mx-lg-2 hover-underline-animation nav-link">Highlights</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/teachers" class="mx-1 mx-lg-2 hover-underline-animation nav-link">Teachers</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about" class="mx-1 mx-lg-2 hover-underline-animation nav-link">About</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/contact" class="mx-1 mx-lg-2 hover-underline-animation nav-link">Contact</NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-fill pb-5 radial-bg">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-dark mt-5 py-5 text-light">
      <div class="text-md-start text-center container">
        <div class="row">
          
          <!-- Contact Info -->
          <div class="mb-4 text-center col-md-4">
            <h5 class="mb-3 text-uppercase fw-bold">Contact</h5>
            <p class="mb-1"> 📍 <a href="https://www.google.com/maps?q=Via+Ponzio,+7,+20131+Milan,+Italy" target="_blank" rel="noopener noreferrer" class="text-light text-decoration-none">
              Via Ponzio, 7 — 20131 Milan, Italy </a>
            </p> 
            <p class="mb-1">📞 <a href="tel:+393334445555" class="text-light text-decoration-none">+39 333 444 5555</a></p>
            <p class="mb-1">✉️ <a href="mailto:yogatella@mail.it" class="text-light text-decoration-none">yogatella@mail.it</a></p>
          </div>

          <!-- Quick Links -->
          <div class="mb-4 text-center col-md-4">
            <h5 class="mb-3 text-uppercase fw-bold">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="/" class="text-light text-decoration-none">Home</a></li>
              <li><a href="/teachers" class="text-light text-decoration-none">Teachers</a></li>
              <li><a href="/about" class="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" class="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          <!-- Social Media Links -->
          <div class="mb-4 text-center col-md-4"> 
            <h5 class="mb-3">Developed by <strong>Sfogliatella Team:</strong></h5>
            <ul class="list-unstyled"> <!-- add Social Media Links with: href="..." -->
              <li><a   class="d-block ig-profile">Gianluca Bettoni</a></li>
              <li><a   class="d-block ig-profile">Frederick Nielsen</a></li>
              <li><a   class="d-block ig-profile">Sveva Zanetti</a></li>
              <li><a   class="d-block ig-profile">Haipeng Zhu</a></li>
            </ul>
          </div>
        </div>
    
      </div>

      <!-- Bottom Line -->
      <div class="mt-4 pt-3 border-top border-light text-light text-center small">
        © 2025 Yogatella — All rights reserved.
      </div>
    </footer>

  </div>
</template>

<script setup>
// ...existing code...
</script>

// Add FontAwesome CDN to Nuxt head property for best practices
// nuxt.config.ts:
// export default defineNuxtConfig({
//   app: {
//     head: {
//       link: [
//         { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }
//       ]
//     }
//   }
// })
