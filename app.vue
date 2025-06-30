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
  <Nav />
  <div class="d-flex flex-column min-vh-100">
    <!-- Main content -->
    <main class="flex-fill pb-5 radial-bg">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* ...existing global styles... */
</style>

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
