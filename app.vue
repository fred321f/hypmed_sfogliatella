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

