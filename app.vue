<script>
import './assets/css/custom-bootstrap.scss';
</script>

<template>
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </Head>

    <!-- NAV-BAR -->
    <header>
      <nav class="bg-dark mb-2 navbar navbar-dark navbar-expand-lg">
        <div class="container">

          <!-- LOGO AND TITLE -->
          <span class="mb-0 navbar-brand h1">
            <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
              <img src="/img/YogaTella.png" alt="YogaTella Logo" class="myLogo me-4" />
              YogaTella
            </NuxtLink>
          </span>

          <!-- BUTTON FOR SMARTPHONE -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- LINKS -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="ms-auto mb-2 mb-lg-0 navbar-nav">
              <li class="nav-item">
                <NuxtLink class="left mx-2 hover-underline-animation nav-link" to="/teachers">Teachers</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="left mx-2 hover-underline-animation nav-link" to="/activities">Activities</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="left mx-2 hover-underline-animation nav-link" to="/about">About</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="left mx-2 hover-underline-animation nav-link" to="/contact">Contact Us</NuxtLink>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </header>

    <!-- CONTENT -->
    <main class="radial-bg">
      <NuxtPage />
    </main>

    <!-- FOOTER -->
    <footer class="bg-dark text-light py-5">
      <div class="container text-center">

        <!-- Social Icons con Founder -->
        <div class="mb-5">
          <h5 class=" mb-4"> Developed by <strong>Sfogliatella Team:</strong> </h5>
          
          <div class="row justify-content-center">
            
            <div class="col-6 col-md-3 mb-4 mt-4">
              <a href="https://www.instagram.com/frederick.nielsen" target="_blank" class="ig-profile d-block">
                <i class="fab fa-instagram fa-2x mb-2"></i>
                <div>Frederick Nielsen</div>
              </a>
            </div>

            <div class="col-6 col-md-3 mb-4 mt-4">
              <a href="https://www.instagram.com/sveva_zanetti" target="_blank" class="ig-profile d-block">
                <i class="fab fa-instagram fa-2x mb-2"></i>
                <div>Sveva Zanetti</div>
              </a>
            </div>

            <div class="col-6 col-md-3 mb-4 mt-4">
              <a href="https://www.instagram.com/gian_betto" target="_blank" class="ig-profile d-block">
                <i class="fab fa-instagram fa-2x mb-2"></i>
                <div>Gianluca Bettoni</div>
              </a>
            </div>

            <div class="col-6 col-md-3 mb-4 mt-4">
              <a href="https://www.instagram.com/hyperzhp" target="_blank" class="ig-profile d-block">
                <i class="fab fa-instagram fa-2x mb-2"></i>
                <div>Haipeng Zhu</div>
              </a>
            </div>
            
          </div>
        </div>

        <!-- Copyright -->
        <div>
          <p class="mb-1">&copy; 2025 <strong>YogaTella</strong>. Tutti i diritti riservati.</p>
        </div>

      </div>

      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    </footer>
    
    
  </div>
</template>
