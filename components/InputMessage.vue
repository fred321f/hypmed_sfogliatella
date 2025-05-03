<template>
    <div class="mb-5 container border border-2 border-primary">
      <p class="my-3">Insert your email</p>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Example@mail.it"
          aria-label="Example@mail.it"
          aria-describedby="basic-addon1"
          v-model="email"
        />
      </div>
      <p class="my-3">Write your message, then press <strong>Send Message</strong> button</p>
      <div class="input-group">
        <textarea
          class="form-control"
          placeholder="Your message"
          aria-label="Text"
          v-model="message"
        ></textarea>
      </div>

        <div class="my-3">
        <button
            type="button"
            class="btn btn-primary"
            @click="handleSend"
        >
            {{ buttonText }}
        </button>
        </div>

        <div v-if="showAlert" class="alert alert-warning" role="alert">
        Fill both email and message fields before sending!
        </div>
  </div>
  </template>


  <script>
  export default {
    data() {
      return {
        email: '',
        message: '',
        buttonText: 'Send Message',
        showAlert: false,
      };
    },
    computed: {
      isFormValid() {
        return this.email.trim() !== '' && this.message.trim() !== '';
      },
    },
    methods: {
      handleSend() {
        if (!this.isFormValid) {
          this.showAlert = true;
          return;
        }
  
        this.buttonText = 'Message Sent!';
        this.email = '';
        this.message = '';
        this.showAlert = false;
      },
    },
  };
  </script>