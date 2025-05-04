<script>
import './assets/css/custom-bootstrap.scss';

import { useRouter } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./pages/index.vue') },
  { path: '/teachers', component: () => import('./pages/teachers/index.vue') },

];

</script>

<template>
  <div>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </Head>
    <header>
      <nav class="bg-transparent mt-3 mb-2 navbar navbar-light navbar-expand-lg">
        <div class="container">
          <span class="mb-0 navbar-brand h1">
            <NuxtLink to="/" class="navbar-brand">YogaTella</NuxtLink>
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="ms-auto mb-2 mb-lg-0 navbar-nav">
              <li class="nav-item">
                <NuxtLink to="/teachers" class="left mx-3 hover-underline-animation nav-link">Teachers</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/activities" class="left mx-3 hover-underline-animation nav-link">Activities</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about" class="left mx-3 hover-underline-animation nav-link">About</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main class="radial-bg">
      <NuxtPage />
    </main>

    <footer>
      <!-- To be implemented -->
    </footer>
  </div>
</template>
