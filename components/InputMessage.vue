<template>
  <div>
    <!-- Name Input -->
    <p class="my-3">Insert your name:</p>
    <input
      type="text"
      class="form-control mb-3"
      placeholder="Your name"
      aria-label="Your name"
      v-model="name"
    />

    <!-- Email Input -->
    <p class="my-3">Insert your email:</p>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
      </div>
      <input
        type="email"
        class="form-control"
        placeholder="Example@mail.it"
        aria-label="Example@mail.it"
        aria-describedby="basic-addon1"
        v-model="email"
      />
    </div>

    <p class="my-3">Write here your message:</p>
    <div class="input-group mb-3">
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
        class="btn-main"
        @click="handleSend"
        :disabled="isSent"
      >
        {{ buttonText }}
      </button>
    </div>

    <div v-if="showAlert" class="alert alert-warning" role="alert">
      Please fill in your name, email, and message before sending!
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      buttonText: 'Send Message',
      showAlert: false,
      isSent: false,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.name.trim() !== '' &&
        this.email.trim() !== '' &&
        this.message.trim() !== ''
      );
    },
  },
  methods: {
    handleSend() {
      if (!this.isFormValid) {
        this.showAlert = true;
        return;
      }

      this.buttonText = 'Message Sent!';
      this.showAlert = false;
      this.isSent = true;

      // Reset fields after sending
      this.name = '';
      this.email = '';
      this.message = '';
    },
  },
};
</script>
