<script setup>
const navItems = [
  { to: '/activities', label: 'Activities' },
  { to: '/highlights', label: 'Highlights' },
  { to: '/teachers', label: 'Teachers' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
    <nav class="bg-transparent my-2 navbar navbar-expand-lg">
        <div class="container">

          <NuxtLink to="/" class="d-flex align-items-center mx-4 navbar-brand">
            <img
              src="public\favicon.ico"
              alt="YogaTella Brand Logo"
              class="me-0 me-lg-2"
              style="height:46px;width:46px;object-fit:contain;"
            />
            <span class="d-md-block w-100 text-center d-none fw-normal">YogaTella</span>
          </NuxtLink>

          <button class="mx-4 navbar-toggler" 
            type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="align-items-center md-align-items-left ms-auto mb-2 mb-lg-0 navbar-nav">
              <li v-for="item in navItems" :key="item.to" class="nav-item">
                <NuxtLink :to="item.to" class="mx-1 mx-lg-2 hover-underline-animation nav-link lead">{{ item.label }}</NuxtLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
</template>

