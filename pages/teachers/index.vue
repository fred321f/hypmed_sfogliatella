<script setup>
import Teachers from '~/components/TeachersList.vue';
import Button from '~/components/btns/mainBtn.vue';
</script>

<template>
    <div class="container">

        <h1 class="my-5 text-center display-1">Teachers</h1>
        <p class="mb-5 text-center lead">Meet our dedicated and experienced teachers who are passionate about sharing
            their knowledge and skills with you.
        </p>
        <!-- <a
            name=""
            id=""
            class="btn btn-primary"
            href="#"
            role="button"
        >testButton</a
        > -->
        
        <Teachers />
        <h2 class="my-3 display-4">
            Meet the team
        </h2>
    </div>
</template>
