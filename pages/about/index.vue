<script setup>
import Button from '~/components/btns/mainBtn.vue'
</script>

<template>
    <div class="mb-5 container ">
        <div class="text-center container">
            <h1 class="my-5  display-1">About YogaTella</h1>
            <h2 class="my-5  lead">On this page, you can learn more about our story and values, and explore our prices policy. Whether you're new to yoga or deepening an existing practice, Yogatella offers a supportive environment led by experienced teachers.</h2>
        </div>

        <h2 class="my-5 display-4">A bit of history</h2>
        <div class="row align-items-stretch p-0">
            <!-- IMAGE -->
            <div class="col-12 col-md-6 p-0 mb-4 mb-md-0 d-flex p-3">
                <img
                src="https://res.cloudinary.com/dpba22oef/image/upload/v1746785133/L11-0606FF-Eucalyptus_Window-Film_ROOM-1_jhqjpi.jpg"
                class="img-fluid w-100 h-100 shadow-lg rounded"
                style="object-fit: cover;"
                alt="Image of yoga center"
                />
            </div>

            <!-- TEXT -->
            <div class="col-12 col-md-6 p-0 d-flex align-items-center">
                <div class="p-4 fs-5 w-100">
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
        <p class="my-5">As explained in <a href="/activities" class="lead">ACTIVITIES</a>, the center offers 
            <a href="/courses" class="lead">courses</a>, 
            <a href="/seminars" class="lead">seminars</a>, 
            <a href="/seminars#workshops" class="lead">workshops</a> and 
            <a href="/retreats" class="lead">retreats</a>.<br> 
                Every activity can be booked in person in our facility in Milan, or you can <a href="/contact" class="lead">CONTACT US</a> via mail or cellphone.<br> 
                Every yoga and meditation course is semestral and they cost 150 euros for each semester. <br> 
                All other activities have a specific cost, <a href="/contact" class="lead">CONTACT US</a> to get more information.
        </p>
    </div>
</template>