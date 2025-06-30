<script setup>
import LeafletMap from '~/components/LeafletMap.vue'
import Card from '~/components/cards/Card.vue'
import Button from '~/components/btns/mainBtn.vue'
import ActivitiesList from '~/components/ActivitiesList.vue';
import { useHead } from '#imports'

useHead({
    title: 'YogaTella',
    meta: [
        { name: 'description', content: 'YogaTella is a well-established yoga center in Milan offering yoga, meditation, retreats, and more.' },
        { name: 'keywords', content: 'Yoga, Meditation, Milan, YogaTella, Retreats, Teachers' },

        // Open Graph
        { property: 'og:title', content: 'YogaTella' },
        { property: 'og:description', content: 'YogaTella is a well-established yoga center in Milan offering yoga, meditation, retreats, and more.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yogatella.com/' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dpba22oef/image/upload/w_1000,ar_3:2,c_fill,g_auto/v1745954116/header-yoga-business-in-a-nutshell-considerations-on-opening-your-own-yoga-studio_z7ymxo.jpg' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'YogaTella' },
        { name: 'twitter:description', content: 'YogaTella is a well-established yoga center in Milan offering yoga, meditation, retreats, and more.' },
        { name: 'twitter:image', content: 'https://res.cloudinary.com/dpba22oef/image/upload/w_1000,ar_3:2,c_fill,g_auto/v1745954116/header-yoga-business-in-a-nutshell-considerations-on-opening-your-own-yoga-studio_z7ymxo.jpg' }
    ],
    link: [
        { rel: 'canonical', href: 'https://yogatella.com/' }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: `{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "YogaTella",
        "image": "https://res.cloudinary.com/dpba22oef/image/upload/w_1000,ar_3:2,c_fill,g_auto/v1745954116/header-yoga-business-in-a-nutshell-considerations-on-opening-your-own-yoga-studio_z7ymxo.jpg",
        "@id": "https://yogatella.com/",
        "url": "https://yogatella.com/",
        "telephone": "+39 333 444 5555",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Ponzio, 7",
          "addressLocality": "Milano",
          "postalCode": "20131",
          "addressCountry": "IT"
        },
        "description": "YogaTella is a well-established yoga center in Milan offering yoga, meditation, retreats, and more."
      }`

        }
    ]
})

// Images import
import hero_image from '~/assets/img/hero_image.jpg'
import activities_img from '~/assets/img/activities_img.jpg'
import teachers_img from '~/assets/img/teachers_img.jpg'

</script>

<template>
    <!-- Main page for YogaTella -->
    <!-- <div class="my-5 text-center container">

        <h1 class="my-5 highlight-heading">YogaTella</h1>
    
    </div> -->

    <div class="my-4 text-center container hero-full-vh">
        <div class="row"></div>
        <div class="row hero-container">
            <div class="col-sm-6">
                <h1 class="mx-4 font-bold display-4 hero-header">At <span class="inline-brand">YogaTella</span>, we specialize in all types of yoga where you're in focus.</h1>
            </div>
            <div class="d-sm-block sm-display--block col-sm-6 d-none">
                <img src="../assets/img/hero_image.jpg" class="rounded img-fluid hero-img"
                    alt="People doing yoga">
            </div>
        </div>
        <div class="row"></div>
    </div>
    <!-- <div class="my-5 container">
        <div class="align-items-center justify-content-around row">
            <div class="d-md-block col-12 col-md-5 d-none">
                <p class="mt-5 fs-5 lead">Yogatella is a well-established yoga center that has been offering the highest
                    quality services in Milan for many years. With a deep passion for well-being and a commitment to
                    excellence,
                    we provide a welcoming space for all to explore the transformative power of yoga.
                </p>
                <div class="d-flex justify-content-md-start justify-content-center my-5">
                    <Button :url="'/about'" :text="'About YogaTella'" />
                </div>
            </div>
            <div class="col-12 col-md-5">
                <img :src="hero_image" class="d-md-block img-fluid hero-img d-none image-container" alt="People doing yoga">
            </div>

            
            <Button class="d-md-none col-4" :url="'/about'" :text="'Learn more'" />
        </div>
    </div> -->
    <!-- Highlights -->
    <div class="my-5 container">
        <h2 class="my-4 my-md-5 text-center display-4 highlight-heading">Highlights</h2>
        <div class="mx-auto border border-2 border-primary image-container" style="width: 95%;">
            <div class="d-flex align-items-center mx-auto mt-4" style="width: 95%;">
                <ActivitiesList highlights />
            </div>
        </div>
    </div>
    <!-- Horizontal cards -->
    <div class="my-5 container">

        <Card type="horizontal" title="Activities"
            description="We offer a wide variety of activities, ranging from yoga and meditation courses, retreats, seminars and workshops"
            :imageUrl="teachers_img" linkUrl="/activities" :buttonText="'See all'" />
        <Card type="horizontal" title="Teachers"
            description="Meet the team! They are all certified and ready to welcome you in the yoga community"
            :imageUrl="activities_img" linkUrl="/teachers" :buttonText="'See all'" />
    </div>
    <!-- Join us -->
    <div class="mb-5 container">

        <div class="align-items-center mt-5 row">
            <div class="mb-3 col-sm-4">
                <h2 class="my-3 display-4">Join us!</h2>
                <p class="my-3 lead">What are you waiting for?</p>
                <p class="my-3">Come visit us to experience the peaceful atmosphere of Yogatella.</p>

                <p class="mb-3">

                    <strong>Address of the center:</strong><br />
                    Via Ponzio, 7<br />
                    20131 Milan MI<br />
                    Italy

                </p>
                <Button :url="'/contact'" :text="'Contact us'" />
            </div>
            <div class="col-sm-8">
                <LeafletMap />
            </div>
        </div>

    </div>

</template>