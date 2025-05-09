<script setup>
import Overview from '~/components/ActivitiesOverview.vue';

import { ref } from 'vue';
import ActivitiesList from '~/components/ActivitiesListFilters.vue';

const userQuery = ref('')
const searchDescription  = ref('')

// Function to trigger the search
const runSearch = () => {
  searchDescription.value = userQuery.value.trim();
};
</script>


<template>
  <div class="container">
    <h1 class="my-5 text-center display-1">Activities</h1>
    <p class="mb-5 text-center lead fs-4">
      At Yogatella Yoga Center, we offer a diverse range of activities designed to support your physical, mental, and
      spiritual well-being. Our offerings are thoughtfully grouped into three main categories:
    </p>

    <Overview />
  </div>

  <div class="container">
    <h1 class="my-5 pt-5 text-center display-1">Find your activity</h1>
    <div class="search-wrapper">
      <input
        type="text"
        v-model="userQuery"
        @keyup.enter="runSearch"
        class="search-input"
        placeholder="Search activity (e.g. Yoga or Meditation)"
      />
      <button @click="runSearch" class="search-button">Search</button>
    </div>

    <ActivitiesList :description="searchDescription" />
  </div>
</template>



<style scoped>
.search-wrapper {
  display: flex;
  justify-content: center;
  margin: 40px 0 20px;
  gap: 10px;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  outline: none;
  font-size: 16px;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  transition: all 0.2s ease-in-out;
}

.search-input:focus {
  border-color: #20c997;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28), 0 0 8px rgba(32, 201, 151, 0.6);
}

.search-button {
  padding: 10px 20px;
  border-radius: 24px;
  border: none;
  background-color: #20c997;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.search-button:hover {
  background-color: #17a89b;
}
</style>