<script setup>
import LeafletMap from '~/components/LeafletMap.vue'
</script>

<template>
    <div class="mb-3 text-center container">
        <h1 class="my-5 text-center display-1">Contact us</h1>
        <h2 class="my-3 text-center lead">Here are all the information you need to book your class, or just to get more information about the center or the activities.</h2>
    </div>
    <div class="mb-5 container">
        <h3 class="my-3 display-6">MEET US IN PERSON!</h3>
        <p class="my-3">You can talk directly to us in our center in Milan</p>
        <div class="align-items-center text-center row">
            <div class="col-sm-4">
                <p>Via Ponzio, 7<br />
                20131, Milano MI<br />
                Italia</p>
                <p>OPEN from monday to friday <br />
                    from 8:00 to 19:00</p>
            </div>
            <div class="col-sm-8">
                <LeafletMap />
            </div>
        </div>
        <h3 class="my-3 display-6">ONLINE</h3>
        <p class="my-3">You can send an email at <strong>yogatella@mail.it</strong> and we will reply as soon as possible</p>
        <p class="my-3">You can send call as at <strong>+39 333 444 5555</strong> during our opening hours</p>
        <p class="my-3">For facilitating the process, we prepareed the following form, you just need to insert your email and the message you want to send us, and we will reply in your inbox</p>
    </div>
</template>