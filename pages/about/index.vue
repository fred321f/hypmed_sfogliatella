<script setup>
import Button from '~/components/btns/mainBtn.vue'
import { useHead } from '#imports'

useHead({
  title: 'About YogaTella',
  meta: [
    { name: 'description', content: 'Learn about the story, values, and pricing of YogaTella, your yoga center in Milan.' }
  ]
})
</script>

<template>
    <div class="mb-5 container">
        <div class="text-center container">
            <h1 class="my-5 display-1">About YogaTella</h1>
            <h2 class="my-5 lead">On this page, you can learn more about our story and values, and explore our prices policy. Whether you're new to yoga or deepening an existing practice, Yogatella offers a supportive environment led by experienced teachers.</h2>
        </div>

        <h2 class="my-5 display-4">A bit of history</h2>
        <div class="align-items-stretch p-0 row">
            <!-- IMAGE -->
            <div class="d-flex mb-4 mb-md-0 p-0 p-3 col-12 col-md-6">
                <img
                src="https://res.cloudinary.com/dpba22oef/image/upload/v1746785133/L11-0606FF-Eucalyptus_Window-Film_ROOM-1_jhqjpi.jpg"
                class="shadow-lg w-100 h-100 img-fluid image-container"
                style="object-fit: cover;"
                alt="Image of yoga center"
                />
            </div>

            <!-- TEXT -->
            <div class="d-flex align-items-center p-0 col-12 col-md-6">
                <div class="p-4 w-100 fs-5">
                <p>
                    Founded in 1968, Yogatella has been a cornerstone of the yoga community
                    for over five decades. From the very beginning, the center has focused
                    on the quality of both the teaching and the teachers, establishing a
                    tradition of excellence that continues to this day. Our founders
                    believed that true growth comes from guidance rooted in knowledge,
                    presence, and authenticity—a belief that still shapes every class we
                    offer. Over the years, Yogatella has grown while remaining faithful to
                    its mission: to provide a space where meaningful, transformative yoga
                    experiences can thrive.
                </p>
                </div>
            </div>
        </div>


        <h2 class="my-5 display-4">Booking and prices</h2>
        <p class="fs-5">
            Ready to explore our 
            <a href="/courses" class="text-decoration-none">yoga and meditation courses</a>, 
            <a href="/seminars" class="text-decoration-none">seminars</a>, 
            <a href="/seminars#workshops" class="text-decoration-none">workshops</a> or 
            <a href="/retreats" class="text-decoration-none">retreats</a>? 
            <br>
            We’ll help you find the best path for your goals, lifestyle, and level of experience.
            <br>
            You can <em>visit us in person</em> at our studio in Milan, or <em>get in touch</em> via phone or email. 
            We’ll guide you through our current offerings 
            and create a <strong>personalized plan</strong> that feels right for you.
            <br>
            No fixed prices here! Every journey is unique. <a href="/contact" class="text-decoration-none">Contact us</a> today and let’s build something beautiful, together!
        </p>
    </div>
</template>