<script setup>
import Button from '~/components/btns/mainBtn.vue'
</script>

<template>
    <div class="mb-5 container ">
        <div class="text-center container">
            <h1 class="my-5  display-1">About YogaTella</h1>
            <p class="fs-5">
                At <strong>Yogatella</strong>, yoga is more than movement. It's a way to reconnect with yourself, find clarity, and feel at home in your body. 
                Whether you're just starting out or deepening your practice, our studio is a place where <em>presence, breath, and transformation</em> come together.
            <br>
                Here, we believe that <strong>yoga is for everyone</strong>. That’s why we offer a wide range of classes, workshops, and retreats all led by 
                experienced teachers who are here to support you with care, insight, and real human connection.
            <br>
                Yogatella is not just a studio, it's a <em>community</em>. A space where you can slow down, feel inspired, and rediscover what matters most. 
                Come as you are, and grow at your own pace.
            </p>  
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
                    <strong>Since 1968</strong>, Yogatella has been a home for those seeking a deeper, more meaningful approach to yoga. 
                    We began as one of the first yoga centers in Milan, built on a vision of <em>authenticity, depth, and excellence</em>.
                </p>
                <p>
                    Our founders believed that true growth happens when yoga is shared with presence and purpose. That spirit still guides us today.
                </p>
                <p>
                    Over the decades, Yogatella has grown into a space where tradition and innovation meet, blending ancient wisdom with fresh perspectives, 
                    and always staying true to what yoga is really about: <strong>connection, awareness, and inner freedom</strong>.
                </p>
                </div>
            </div>
        </div>


        <h2 class="my-5 display-4">Booking and prices</h2>
        <!--<p class="my-5">As explained in <a href="/activities" class="lead">ACTIVITIES</a>, the center offers 
            <a href="/courses" class="lead">courses</a>, 
            <a href="/seminars" class="lead">seminars</a>, 
            <a href="/seminars#workshops" class="lead">workshops</a> and 
            <a href="/retreats" class="lead">retreats</a>.<br> 
                Every activity can be booked in person in our facility in Milan, or you can <a href="/contact" class="lead">CONTACT US</a> via mail or cellphone.<br> 
                Every yoga and meditation course is semestral and they cost 150 euros for each semester. <br> 
                All other activities have a specific cost, <a href="/contact" class="lead">CONTACT US</a> to get more information.
        </p>-->
        <p class="fs-5">
            Ready to explore our 
            <a href="/courses" class="lead">yoga and meditation courses</a>, 
            <a href="/seminars" class="lead">seminars</a>, 
            <a href="/seminars#workshops" class="lead">workshops</a> or 
            <a href="/retreats" class="lead">retreats</a>? 
            <br>
            We’ll help you find the best path for your goals, lifestyle, and level of experience.
            <br>
            You can <em>visit us in person</em> at our studio in Milan, or <em>get in touch</em> via phone or email. 
            We’ll guide you through our current offerings 
            and create a <strong>personalized plan</strong> that feels right for you.
            <br>
            No fixed prices here! Every journey is unique. <a href="/contact" class="lead">Contact us</a> today and let’s build something beautiful, together!
        </p>

        
    </div>
</template>