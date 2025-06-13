<script setup>
import Teachers from '~/components/TeachersList.vue';
import { useHead } from '#imports'

useHead({
  title: 'Teachers | YogaTella',
  meta: [
    { name: 'description', content: 'Meet our dedicated and experienced yoga teachers at YogaTella.' }
  ]
})
</script>

<template>
    <div class="container">

        <h1 class="my-5 text-center display-1">Teachers</h1>
        <p class="mb-5 text-center lead">Meet our dedicated and experienced teachers who are passionate about sharing
            their knowledge and skills with you.
        </p>
        
        <Teachers />
        
    </div>
</template>
