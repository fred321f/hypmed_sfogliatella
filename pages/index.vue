<script setup>
const { data, pending, error } = useFetch('/api/teachers', {
  onResponse({ response }) {
    console.log('API Response:', response._data);
  },
  onResponseError({ response }) {
    console.error('API Error:', response._data);
  }
});
</script>

<template>
  <div>

    <button type="button" class="btn btn-primary">Primary</button>

    <!-- Alert from bootstrap -->
    <div class="alert alert-info" role="alert">
      This is a Bootstrap alert example.
    </div>

    <div class="container">
      <h1>Teachers List</h1>
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top"
              src="https://res.cloudinary.com/dpba22oef/image/upload/v1738671482/cld-sample-5.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top"
              src="https://res.cloudinary.com/dpba22oef/image/upload/v1738671482/cld-sample-5.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top"
              src="https://res.cloudinary.com/dpba22oef/image/upload/v1738671482/cld-sample-5.jpg" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div v-if="pending">Loading...</div>
  <div v-if="error">
    <p>Error: {{ error.message }}</p>
    <p v-if="error.data">Details: {{ error.data.message }}</p>
  </div>
  <div v-else-if="data">
    <ul v-if="data.success && data.data.length">
      <li v-for="teacher in data.data" :key="teacher._id">{{ teacher.name }}</li>
    </ul>
    <p v-else-if="data.error">No teachers found</p>
    <p v-else>Failed to load teachers: {{ data.message }}</p>
  </div>
</template>