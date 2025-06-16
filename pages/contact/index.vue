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
        <div class=" ">
            <p class="mb-3 fs-5">
            If you have any questions about our activities, feel free to call us at <strong><a href="tel:+393334445555" class="text-decoration-none">+39 333 444 5555</a></strong>.  <br />
            We will be happy to help you find the one that best suits you and your needs.
            </p>
            
        </div>
    </div>


    <!-- Email Us Section -->
    <div class="mb-5 container"> 
        <div class="row    p-0 m-0">
            
            <!-- Left Text Section -->
            <div class="col-sm-4 mb-3 mb-sm-0 p-4  ps-0">
                <h3 class="mt-3 mb-5 display-4">Email us</h3>
                <p class="mb-3">
                    You can send an email to <strong><a href="mailto:yogatella@mail.it" class="text-decoration-none">yogatella@mail.it</a></strong> and we will reply as soon as possible.
                </p>
                <p>
                    To make things easier, fill out the form next to this text with your name, email, and message,
                    and we’ll reply directly to your inbox.
                </p>
            </div>
            <div class="col-sm-8 text-start border border-2 border-primary rounded-4 p-4 shadow-sm card">
                <InputMessage />
            </div>


        </div>
    </div>
    
    <!-- Meet Us Section -->
    <div class="mb-5 container">
        <h3 class="my-5 display-4">Meet us in person!</h3>
        <p class="my-3">Come visit us in our center in Milan, the receptionist will be ready to answer all your questions and sign you up for the activity that best suits you. </p>
         
            <div class="row align-items-center">
                <div class="col-sm-4 mb-3 mb-sm-0 fs-5 p-3">
                     
                    <p class="mb-3">
                        <strong>Address of the center:</strong><br />
                        <a href="https://www.google.com/maps?q=Via+Ponzio,+7,+20131+Milan,+Italy" target="_blank" rel="noopener noreferrer" 
                            class="text-decoration-none text-dark" >
                            Via Ponzio, 7<br />
                            20131 Milan MI<br />
                            Italy  
                        </a>
                    </p>
                    <p>
                        <strong>Opening Hours:</strong><br />
                        Monday to Friday: 8:30 – 19:30 <br />
                        Saturday and Sunday: 8:30 – 12:30
                    </p>

                </div>

                <div class="col-sm-8 ">
                    <LeafletMap />
                </div>
            </div>
         
    </div>
   
</template>