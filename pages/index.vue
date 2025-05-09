<script setup>
import LeafletMap from '~/components/LeafletMap.vue'
import Card from '~/components/cards/Card.vue'
import Button from '~/components/btns/mainBtn.vue'
</script>

<template>
    <div class="text-center container">
        <h1 class="my-5  display-1">YogaTella</h1>
        <h2 class="my-5  lead">Welcome to a space where mind, body, and soul come together.
            Discover balance, strength, and serenity at our yoga center.
        </h2>
        <img src="https://res.cloudinary.com/dpba22oef/image/upload/v1745954116/header-yoga-business-in-a-nutshell-considerations-on-opening-your-own-yoga-studio_z7ymxo.jpg"
            class="rounded img-fluid" alt="People doing yoga">
        <p class="my-5 ">Yogatella is a well-established yoga center that has been offering the highest
            quality services in Milan for many years. With a deep passion for well-being and a commitment to excellence,
            we provide a welcoming space for all to explore the transformative power of yoga.
        </p>
        <div class="my-5 ">
            <Button :url="'/about'" :text="'About YogaTella'" />
        </div>
    </div>
    <div class="my-5 container">
        <Card type="horizontal" title="Activities"
            description="We offer a wide variety of activities, ranging from yoga and meditation courses, retreats, seminars and workshops"
            imageUrl="https://res.cloudinary.com/dpba22oef/image/upload/w_1500,ar_3:2,c_fill,g_auto/v1745953332/ro147-scaled-1440x809-2_ygeojc.jpg"
            linkUrl="/activities" :buttonText="'Read more'" />
        <Card type="horizontal" title="Teachers"
            description="Meet the team! They are all certified and ready to welcome you in the yoga community"
            imageUrl="https://res.cloudinary.com/dpba22oef/image/upload/w_1500,ar_3:2,c_fill/v1745953300/Yoga-teacher-training-2_ryrg6y.jpg"
            linkUrl="/teachers" :buttonText="'Read more'" />
    </div>
    <div class="mb-5 container">
        <h2 class="my-5 display-4">JOIN US!</h2>
        <p class="my-3 lead">What are you waiting for?</p>
        <p class="my-3">Come visit us at Via Ponzo 7, Milan, and experience the peaceful atmosphere of Yogatella.</p>
        <div class="container">
            <div class="mt-5 align-items-center text-center row">
                <div class="mb-3 col-sm-4">
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
