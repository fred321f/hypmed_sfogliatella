<!-- HOW TO USE THIS COMPONENT

// ADD THIS TO THE TOP OF THE PAGE
<script setup>
    import Card from "@/components/cards/Card.vue";
</script>

// ADD THE CARD INSIDE THE PAGE and Change TEACHER to what you need, like this:
<div class="col-md-4" v-for="teacher in teachers" :key="teacher.id">

    <Card 
        :type="'vertical'" 
        :title="TEACHER.name" 
        :description="TEACHER.overview" 
        :imageUrl="TEACHER.imageUrl"
        :buttonText="'Read more'" 
        :linkUrl="'/TEACHERs/' + TEACHER.name" 

        :level="TEACHER.level"
        :taughtBy="TEACHER.taught_by"
        :id="TEACHER.name.replace(/\s+/g, '-').toLowerCase()"
    />

</div>

 -->


 <script setup>
 import Button from '@/components/btns/mainBtn.vue';
 </script>
 
 <template>
     <!-- Cards for teacher and activities -->
     <div v-if="type === 'vertical'" :id="id">
         <div class="d-flex justify-content-center col-12">
             <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card vertiCard">
                 
                 <div class="overflow-hidden">
                     <img :src="imageUrl" class="card-img-top activity-img" />
                 </div>
 
                 <div class="d-flex flex-column card-body">
 
                    <h5 class="card-title fs-4 fw-bold">{{ title }}</h5>
                    <p class="card-text" style="font-size: 16px; line-height: 2em">{{ description }}</p>

                    <p v-if="level" class="mb-2 text-muted">Level: {{ level }}</p>
                    <p v-if="taughtBy" class="mb-2 text-muted">Taught by: <strong>{{ taughtBy }}</strong></p>
                    <p v-if="guest" class="mb-2 text-muted">Special guest: <strong>{{ guest }}</strong></p>
                    <p v-if="location" class="mb-2 text-muted">In <strong>{{ location }}</strong></p>
                     
                     <!-- ADD MORE HERE (remember to use v-if) -->
             
                     <div class="d-flex justify-content-center mt-auto">
                         <Button :url="linkUrl" :text="buttonText" class="w-100" />
                     </div>
 
                 </div>
             </div>
         </div>
     </div>
 
     <!-- Cards for the home page -->
     <div v-else-if="type === 'horizontal'">
         <a :href="linkUrl" class="text-dark text-decoration-none">
             <div class="d-flex justify-content-center col-12">
                 <div class="shadow-lg m-3 border-0 rounded-4 w-100 overflow-hidden card horiCard">
                     <div class="d-flex">
                         <div class="flex-shrink-0 overflow-hidden">
                             <img :src="imageUrl" class="card-img-left activity-img" />
                         </div>
                         <div class="d-flex flex-column card-body">
                             <h5 class="card-title fs-4 fw-bold">{{ title }}</h5>
                             <p class="card-text" style="font-size: 16px; line-height: 2em">{{ description }}</p>
                             <div class="justify-content-center mt-auto row">
                                 <div class="col"></div>
                                 <div class="col"></div>
                                 <div class="d-flex justify-content-center mr-5 col">
                                     <a :href="linkUrl" class="my-link">
                                         {{ buttonText }} <i class="bi-arrow-right bi"></i>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </a>
     </div>
 </template>
 
 <script>
 // Props
 export default {
     name: 'Card',
     props: {
         type: {
             type: String,
             default: 'vertical'
         },
         title: {
             type: String,
             required: true
         },
         description: {
             type: String,
             required: true
         },
         imageUrl: {
             type: String,
             required: true
         },
         buttonText: {
             type: String,
             default: 'Read more'
         },
         linkUrl: {
             type: String,
             required: true
         },
         // Optional
         level: {
             type: String,
             required: false,
             default: null
         },
         taughtBy: {
             type: String,
             required: false,
             default: null
         },
         location: {
             type: String,
             required: false,
             default: null
         },
         guest: {
             type: String,
             required: false,
             default: null
         },
         id: {                   // for structural link
             type: String,
             required: false,
             default: null
         }
         // ADD MORE HERE (remember to put required: false)
     }
 }
 </script>
 
 
 
 
 
 <style scoped>
 .mainCard {
     transition: transform 0.3s ease, box-shadow 0.3s ease;
     height: 200px;
     cursor: pointer;
 }
 
 .my-link {
     height: 45px; 
     text-decoration: none; 
     color: #20c997;
 }
 
 
 .vertiCard {
     transition: transform 0.3s ease, box-shadow 0.3s ease;
 }
 .vertiCard.activity-img {
     width: auto;
     height: 200px;
     object-fit: cover;
 }
 .vertiCard:hover {
     transform: translateY(-8px);
     box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
 }
 .vertiCard:hover .activity-img {
     transform: scale(1.05);
 }
 
 
 .horiCard {
     transition: transform 0.3s ease, box-shadow 0.3s ease;
 }
 .horiCard.activity-img {
     width: auto;
     height: 200px;
     object-fit: cover;
 }
 .horiCard:hover {
     transform: translateY(-8px);
     box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
 }
 .horiCard:hover .activity-img {
     transform: scale(1.05);
 }
 
 
 .activity-img {
     transition: transform 0.5s ease;
     width: 100%;
     height: 100%;
     object-fit: cover;
 }
 
 
 .card-img-left {
     width: 300px;
     /* Increased width for a larger image */
     height: auto;
     object-fit: cover;
 }
 </style>