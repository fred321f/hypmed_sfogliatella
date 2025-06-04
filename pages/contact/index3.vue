<script setup>
import LeafletMap from '~/components/LeafletMap.vue'
import InputMessage from '~/components/InputMessage.vue'
import { useHead } from '#imports'
import Button from '@/components/btns/mainBtn.vue';

useHead({
  title: 'Contact YogaTella',
  meta: [
    { name: 'description', content: 'Contact YogaTella in Milan for bookings, questions, or more information about our yoga and meditation activities.' }
  ]
})
</script>

<template>
    <div class="text-center container">
        <h1 class="my-5 display-1">Contact us</h1>
        <h2 class="my-5 lead">Here are all the ways in which you can contact us to book your class, or just to get more information about the center or the activities we offer.</h2>
    </div>

    <!-- Call Us Section -->
    <div class="mb-5 container">
    <h3 class="my-5 display-4">Call us</h3>
    <div class="card card-body rounded-4 shadow-sm p-4 text-center">
        <p class="mb-3 fs-5">
        If you have any questions about our activities, feel free to call us at <strong>+39 333 444 5555</strong>.  <br />
        We will be happy to help you find the one that best suits you and your needs.
        </p>
        <Button url="tel:+393334445555" text="Call us now" class="w-auto mx-auto" />
        
    </div>
    </div>


    <!-- Email Us Section -->
    <div class="mb-5 container"> 
        <h3 class="my-5 display-4">Email us</h3>
        <div class="card card-body rounded-4 shadow-sm p-0 mt-5">
            <div class="row align-items-center text-center p-0 m-0">
                
                <!-- Left Text Section -->
                <div class="col-sm-4 mb-3 mb-sm-0 p-4 text-start">
                
                <p class="mb-3">
                    You can send an email to <strong>yogatella@mail.it</strong> and we will reply as soon as possible.
                </p>
                <p class="mb-3">
                    You can call us at <strong>+39 333 444 5555</strong> during our opening hours:<br />
                    <strong>Monday to Friday, 8:00 AM – 7:00 PM</strong>.
                </p>
                <p>
                    To make things easier, fill out the form next to this text with your name, email, and message,
                    and we’ll reply directly to your inbox.
                </p>
                </div>
                <div class="col-sm-8  p-0">
                    <InputMessage />
                </div>

            </div>
        </div>
    </div>

    <!-- Meet Us Section -->
    <div class="mb-5 container">
        <h3 class="my-5 display-4">Meet us in person!</h3>
        <p class="my-3">Come visit us in our center in Milan, the receptionist will be ready to answer all your questions and sign you up for the activity that best suits you. </p>
        <div class="card card-body rounded-4 shadow-sm  p-0">
            <div class="row align-items-center text-center ">
                <div class="col-sm-4 mb-3 mb-sm-0 fs-5 p-3">
                <p class="mb-3">
                    <strong>Address:</strong><br />
                    Via Ponzio, 7<br />
                    20131 Milan MI<br />
                    Italy
                </p>
                <p>
                    <strong>Opening Hours:</strong><br />
                    Monday – Friday<br />
                    8:00 AM – 7:00 PM
                </p>
                </div>

                <div class="col-sm-8 ">
                <div class="map-container rounded-3 overflow-hidden">
                    <LeafletMap />
                </div>
                </div>
            </div>
        </div>
    </div>
   
</template>