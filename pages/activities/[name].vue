<script setup>
import loadingSpinner from '@/components/loadingSpinner.vue';
import Card from '~/components/cards/Card.vue';
import { getImage } from '../utility/getImage';  // <-- to load the image from the server
import { useHead } from '#imports'
import Button from '~/components/btns/mainBtn.vue'

const route = useRoute();


const { data: activity, error, pending: loading } = await useLazyFetch('/api/activitiesTeacher', {
  query: {
    name: route.params.name
  },
  transform: (result) => {
    if (result.success) {
      return result.data;
    } else {
      throw createError({
        statusCode: 404,
        statusMessage: result.message || 'Activity not found'
      });
    }
  }
});

useHead({
  title: activity.value ? `${activity.value.name} - Activity | YogaTella` : 'Activity | YogaTella',
  meta: [
    { name: 'description', content: activity.value ? `Discover details about ${activity.value.name} at YogaTella.` : 'Explore our activities at YogaTella.' }
  ]
})
</script>

<template>
  <div v-if="loading" class="text-center">
    <loadingSpinner />
  </div>

  <div v-else-if="error" class="text-danger text-center">
    <p>{{ error }}</p>
  </div>

  <div v-else class="my-5 container">
    <h1 class="my-5 text-center display-1">{{ activity.name }}</h1>

    <!-- ----- ACTIVITY Section ----- -->
    <div class="align-items-stretch p-0 row">
      <!-- IMAGE -->
      <div class="d-flex mb-4 mb-md-0 p-0 p-3 col-md-6">
        <img
          :src="getImage(activity)"
          class="shadow-lg w-100 h-100 img-fluid"
          style="object-fit: cover; border-radius: 15px;"
          alt="Activity Image"
        />
      </div>

      <!-- INFO -->
      <div class="d-flex align-items-center p-0 col-md-6">
        <div class="p-4 w-100 fs-5"> <!-- remove fs-5 if text too big -->
          <p v-if="activity.description">{{ activity.description }}</p>
          <p v-if="activity.level">Level: <strong>{{ activity.level }}</strong></p>
          <p v-if="activity.day">Day: <strong>{{ activity.day }}</strong></p>
          <p v-if="activity.time">Time: <strong>{{ activity.time }}</strong></p>
          <p v-if="activity.date">The retreat is <strong>{{ activity.date }}</strong></p>
          <p v-if="activity.duration">For a total duration of <strong>{{ activity.duration }}</strong></p>
          <p v-if="activity.location">In a beautifull location in <strong>{{ activity.location }}</strong></p>
        </div>
      </div>
    </div>


    <!-- ----- TEACHER Section ----- -->
    <div v-if="activity.teacher" class="mt-5">
      <h2 class="text-md-start display-5">Meet The Teacher: </h2>
      <Card 
        type="horizontal" 
        :title="activity.teacher.name"
        :description="activity.teacher.overview"
        :imageUrl="activity.teacher.imageUrl"
        :linkUrl="`/teachers/${ activity.teacher.name }`" 
        buttonText="See more" 
      />
    </div>

    <!-- ----- Guest Section ----- -->
    <div v-if="activity.guest" class="mt-5">
      <h2 class="text-md-start display-5">Special Guest:</h2>
      <Card 
        type="horizontal" 
        :title="activity.guest.name"
        :description="activity.guest.description"
        :imageUrl="activity.guest.imageURL"
      />
    </div>
    
    <!-- Call Us Section -->
    <div >
      <h3 class="my-5 display-4">Book Now</h3>
      
      <p class="mb-3 fs-5">
        Want to know more about this activity?
        Call us at <strong><a href="tel:+393334445555" class="text-decoration-none">+39 333 444 5555</a></strong>, 
        send us an <strong><a href="mailto:yogatella@mail.it" class="text-decoration-none">email</a></strong>, or visit our studio in Milan.
        We’ll guide you through our current offerings and help you find the activity that best fits you and your needs.
      </p>

      <Button :url="'/contact'" :text="'Contact us'" />
        
    </div>

  </div>
</template>
