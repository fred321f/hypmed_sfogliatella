<script setup>
import LeafletMap from '~/components/LeafletMap.vue'
import InputMessage from '~/components/InputMessage.vue'
</script>

<template>
    <div class="text-center container">
        <h1 class="my-5 display-1">Contact us</h1>
        <h2 class="my-5 lead">Here are all the ways in which you can contact us to book your class, or just to get more information about the center or the activities we offer.</h2>
    </div>
    <div class="mb-5 container">
        <h3 class="my-5 display-4">Meet us in person!</h3>
        <p class="my-3">Visit our center in Milan, the receptionist will be ready to answer all of your questions and enroll you in your favourite activity. </p>
        <div class="mt-5 align-items-center text-center row">
            <div class="col-sm-4">
                <p>Via Ponzio, 7<br />
                20131, Milano MI<br />
                Italia</p>
                <p>OPEN from Monday to Friday <br />
                    from 8:00 to 19:00</p>
            </div>
            <div class="col-sm-8">
                <LeafletMap />
            </div>
        </div>
        <h3 class="my-5 display-4">Online</h3>
        <p class="my-3">You can send an email at <strong>yogatella@mail.it</strong> and we will reply as soon as possible.</p>
        <p class="my-3">You can call as at <strong>+39 333 444 5555</strong> during our opening hours from Monday to Friday from 8:00 to 19:00.</p>
        <p class="my-3">For facilitating the process, we prepared the following form, you just need to insert your email and the message you want to send us, and we will reply in your inbox.</p>
    </div>
    <InputMessage />
</template>