<template>
    <div class="container">
        <h1 class="display-1">404 - Page not found</h1>
        <p class="lead">This is awkward...</p>
    </div>
</template>

<script setup>
import { useHead } from '#imports'
useHead({
  title: '404 - Page not found | YogaTella',
  meta: [
    { name: 'description', content: 'Sorry, the page you are looking for does not exist at YogaTella.' }
  ]
})
</script>
