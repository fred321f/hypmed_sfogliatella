<template>
    <nav class="bg-transparent my-2 navbar navbar-expand-lg">
        <div class="container">

          <NuxtLink to="/" class="d-flex align-items-center navbar-brand">
            <img
              src="public\favicon.ico"
              alt="YogaTella Brand Logo"
              class="me-2"
              style="height:42px;width:42px;object-fit:contain;"
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
</template>