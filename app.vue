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
      <nav class="bg-transparent mb-2 navbar navbar-expand-lg">
        <div class="container">

          <span class="mb-0 navbar-brand h1">
            <NuxtLink to="/" class="d-flex align-items-center navbar-brand">
              YogaTella
            </NuxtLink>
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
              <li class="nav-item">
                <NuxtLink to="/contact" class="left mx-3 hover-underline-animation nav-link">Contact Us</NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>

    <main class="radial-bg">
      <NuxtPage />
    </main>


    <footer class="bg-dark py-5 text-light">
      <div class="text-center container">

        <!-- Social Icons con Founder -->
        <div class="mb-5">
          <h5 class="mb-4"> Developed by <strong>Sfogliatella Team:</strong> </h5>

          <div class="justify-content-center row">

            <div class="my-4 col-md-2">
              <div class="d-block ig-profile">Frederick Nielsen</div>
            </div>

            <div class="mt-4 mb-4  col-md-2">
              <div class="d-block ig-profile">Sveva Zanetti</div>
            </div>

            <div class="mt-4 mb-4 col-md-2">
              <div class="d-block ig-profile">Gianluca Bettoni</div>
            </div>

            <div class="mt-4 mb-4 col-md-2">
              <div class="d-block ig-profile">Haipeng Zhu</div>
            </div>

          </div>
        </div>

        <!-- Copyright -->
        <div>
          <p class="mb-1">&copy;  2025 Developed by <strong>Sfogliatella Team</strong>. All rights reserved.</p>
        </div>

      </div>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    </footer>


  </div>
</template>
