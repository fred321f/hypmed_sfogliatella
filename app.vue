<!-- <script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: 'App',
};
</script> -->

<template>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </Head>
    <header>
      <nav class="bg-transparent navbar navbar-light navbar-expand-lg">
        <div class="container">
          <span class="mb-0 navbar-brand h1">
            <NuxtLink to="/" class="nav-link teal-600">YogaTella</NuxtLink>
          </span>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="ms-auto mb-2 mb-lg-0 navbar-nav">
              <li class="nav-item">
                <NuxtLink to="/teachers" class="nav-link">Teachers</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/activities" class="nav-link">Activities</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link">About</NuxtLink>
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
