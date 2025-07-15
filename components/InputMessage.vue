<template>
  <div>
    <!-- Name Input -->
    <p class="my-2 fs-5"><b>Contact</b></p>
    <p class="my-3">Insert your name:</p>
    <input
      type="text"
      class="mb-1 form-control"
      placeholder="Your name"
      aria-label="Your name"
      v-model="name"
      @input="validateField('name')"
    />
    <div v-if="nameError" class="mb-2 text-danger small">{{ nameError }}</div>

    <!-- Email Input -->

    <p class="my-3">Insert your email:</p>
    <div class="input-group mb-1">
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
        @input="validateField('email')"
      />
    </div>
    <div v-if="emailError" class="mb-2 text-danger small">{{ emailError }}</div>


    <p class="my-3">Write here your message:</p>
    <div class="input-group mb-1">
      <textarea
        class="form-control"
        placeholder="Your message"
        aria-label="Text"
        v-model="message"
        @input="validateField('message')"
      ></textarea>
    </div>
    <div v-if="messageError" class="mb-2 text-danger small">{{ messageError }}</div>

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
      nameError: '',
      emailError: '',
      messageError: '',
    };
  },
  computed: {
    isFormValid() {
      return (
        !this.nameError &&
        !this.emailError &&
        !this.messageError &&
        this.name.trim() !== '' &&
        this.email.trim() !== '' &&
        this.message.trim() !== ''
      );
    },
  },
  methods: {
    validateField(field) {
      if (field === 'name') {
        this.nameError = this.name.trim() === '' ? 'Name is required.' : '';
      }
      if (field === 'email') {
        if (this.email.trim() === '') {
          this.emailError = 'Email is required.';
        } else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
          this.emailError = 'Please enter a valid email address.';
        } else {
          this.emailError = '';
        }
      }
      if (field === 'message') {
        this.messageError = this.message.trim() === '' ? 'Message is required.' : '';
      }
    },
    handleSend() {
      this.validateField('name');
      this.validateField('email');
      this.validateField('message');
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
      this.nameError = '';
      this.emailError = '';
      this.messageError = '';
    },
  },
};
</script>
