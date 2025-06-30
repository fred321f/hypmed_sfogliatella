<script setup>
    import ActivitiesList from '~/components/ActivitiesList.vue';
    import { useHead } from '#imports'

    useHead({
      title: 'Highlights | YogaTella',
      meta: [
        { name: 'description', content: 'Discover the highlights and featured activities at YogaTella.' }
      ]
    })
</script>

<template>
    <div class="my-5 container">

        <h1 class="my-5 text-center display-1">Highlights</h1>
        <h2 class="my-5 text-center lead">Here is a glimpse into what makes YogaTella special!<br> We personally selected some of our favourite activities to help you choose between the many we offer.</h2>
        <ActivitiesList highlights="true"/>
    </div>
</template>
