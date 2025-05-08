<!-- To add in a page you need to add:
<script setup>
    import ActivitiesList from '~/components/activitiesList.vue';
</script>

<template>
    ...
    <ActivitiesList type="Yoga" />
    ...
</template>
-->

<template>
  <div>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>

    <div class="row">
      <div class="col-md-4" v-for="activity in activities" :key="activity.id">

         <Card 
          :type="'vertical'" 
          :title="activity.name" 
          :description="activity.description" 
          :imageUrl="getActivityImage(activity)"
          :buttonText="'Read more'" 
          :linkUrl="'/activities/' + activity.name" 

          
        />
        <!-- 
        :level="activity.level"
          :taughtBy="activity.taught_by"
          :id="activity.name.replace(/\s+/g, '-').toLowerCase()"
        <div class="mb-3 card">
          <img 
            :src="getSeminarImage(seminar)" 
            class="card-img-top" 
            alt="Seminar Image" 
          />
          <div class="card-body">
            <h5 class="card-title">{{ seminar.name }}</h5>
            <p class="card-text">{{ seminar.description }}</p> 
            <h6 class="text-muted">Led by: <strong>{{ seminar.heldBy }}</strong></h6>  ADD RELATED LINK!!!!!!!! 
            <div class="gap-2 d-grid">
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>-->
      </div>
    </div>

    <div v-if="!activities.length && !error" class="text-center">
      <p class="text-danger">No activities available at the moment.</p>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/cards/Card.vue";

import { ref, onMounted } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});

const activities = ref([]);
const error = ref(null);

const getActivityImage = (activity) => {
  return activity.imageUrl || 'https://cdn.yogaacademy.it/wp-content/uploads/2024/01/fless.png';
};

onMounted(async () => {
  try {
    let url = '/api/activities'; // Default API endpoint 
    if (props.type) {
      url += `?type=${props.type}`; // Add type filter
    }
    const response = await fetch(url);
    const result = await response.json();
    if (result.success) {
      courses.value = result.data;
    } else {
      throw new Error(result.message || 'Unknown error');
    }
  } catch (err) {
    error.value = err.message;
  }
});
</script>
