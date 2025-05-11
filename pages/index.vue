<script setup>
import LeafletMap from '~/components/LeafletMap.vue'
import Card from '~/components/cards/Card.vue'
import Button from '~/components/btns/mainBtn.vue'
</script>

<template>
    <div class="my-4 text-center container">
        <div class="row"></div>
        <div class="row hero-container">
            <div class="col-sm-6">
                <h1 class="font-bold display-4 hero-header">At <span class="inline-brand">YogaTella</span>, we specialize in all types of yoga where you're in focus.</h1>
                <!-- <h2 class="lead hero-paragraph">At the space where mind, body, and soul come together. Offering the
                    highest quality services in Milan, we teach and host welfare events with a burning passion, where
                    you are in the middle.</h2> -->
            </div>
            <div class="d-sm-block sm-display--block col-sm-6 d-none">
                <img src="../assets/img/main_homepage-copy.jpg" class="rounded img-fluid hero-img"
                    alt="People doing yoga">
            </div>
        </div>
        <div class="row"></div>




        <!-- <h1 class="my-5 text-center display-1">YogaTella</h1>
        <h2 class="my-3 text-center lead">Welcome to a space where mind, body, and soul come together.
            Discover balance, strength, and serenity at our yoga center.
        </h2>
        <img src="https://res.cloudinary.com/dpba22oef/image/upload/v1745954116/header-yoga-business-in-a-nutshell-considerations-on-opening-your-own-yoga-studio_z7ymxo.jpg"
            class="rounded img-fluid" alt="People doing yoga">
        <p class="my-3 text-center">Yogatella is a well-established yoga center that has been offering the highest
            quality services in Milan for many years. With a deep passion for well-being and a commitment to excellence,
            we provide a welcoming space for all to explore the transformative power of yoga.
        </p>
        <div class="my-3 text-center">
            <Button :url="'/about'" :text="'About YogaTella'" />
        </div> -->
    </div>
    <div class="my-5 container">
        <Card type="horizontal" title="Activities"
            description="We offer a wide variety of activities, ranging from yoga and meditation courses, retreats, seminars and workshops"
            imageUrl="https://res.cloudinary.com/dpba22oef/image/upload/w_1500,ar_3:2,c_fill,g_auto/v1745953332/ro147-scaled-1440x809-2_ygeojc.jpg"
            linkUrl="/activities" :buttonText="'See all'" />
        <Card type="horizontal" title="Teachers"
            description="Meet the team! They are all certified and ready to welcome you in the yoga community"
            imageUrl="https://res.cloudinary.com/dpba22oef/image/upload/w_1500,ar_3:2,c_fill/v1745953300/Yoga-teacher-training-2_ryrg6y.jpg"
            linkUrl="/teachers" :buttonText="'See all'" />
    </div>

    <div class="mb-5 container">
        <h2 class="my-3 display-4">Join us!</h2>
        <p class="my-3 lead">What are you waiting for?</p>
        <p class="my-3">Come visit us at Via Ponzo 7, Milan, and experience the peaceful atmosphere of Yogatella.</p>
        <div class="container">
            <div class="align-items-center text-center row">
                <div class="col-sm-4">
                    <p>Via Ponzio, 7<br />
                        20131, Milano MI<br />
                        Italia</p>
                    <Button :url="'/contact'" :text="'Contact us'" />
                </div>
                <div class="col-sm-8">
                    <LeafletMap />
                </div>
            </div>
        </div>
    </div>

</template>