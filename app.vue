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
      <nav class="navbar navbar-expand-lg py-3 transition-all navbar-black" 
          :class="{'navbar-black shadow-sm': scrolled, 'bg-light': !scrolled}">
      
        <div class="container">
          <!-- Logo and Brand Name -->
          <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
            <img src="/img/YogatellaLogo.png" alt="YogaTella Logo" class="me-2" style="height: 60px; width: auto;" />
          </NuxtLink>
          <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
            <span class="fw-bold ">YogaTella</span>
          </NuxtLink>

          <!-- Mobile Toggle Button -->
          <button 
            class="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Nav Links -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li class="nav-item mx-lg-2">
                <NuxtLink to="/teachers" class="nav-link position-relative" :class="{'active-link': currentRoute === '/teachers'}">
                  Teachers
                </NuxtLink>
              </li>
              <li class="nav-item mx-lg-2">
                <NuxtLink to="/activities" class="nav-link position-relative" :class="{'active-link': currentRoute === '/activities'}">
                  Activities
                </NuxtLink>
              </li>
              <li class="nav-item mx-lg-2">
                <NuxtLink to="/about" class="nav-link position-relative" :class="{'active-link': currentRoute === '/about'}">
                  About
                </NuxtLink>
              </li>
              <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                <NuxtLink to="/contact" class="btn btn-primary rounded-pill px-4">
                  Contact Us
                </NuxtLink>
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



<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const scrolled = ref(false);
const route = useRoute();

// Compute current route for active link styling
const currentRoute = computed(() => route.path);

// Change navbar style on scroll
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Check initial scroll position
  handleScroll();
  
  // Clean up event listener when component is unmounted
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});
</script>
