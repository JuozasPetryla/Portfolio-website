<template>
  <form class="contact-form" @submit.prevent="formSubmit">
    <div class="contact-form-container">
      <div class="form-control">
        <label for="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          v-model.trim="form.name"
          @blur="validateName"
          v-debounce:300="validateName"
          :class="{ invalid: !nameIsValid }"
        />
        <p v-if="!nameIsValid" class="error-message">Please input a correct name</p>
      </div>
      <div class="form-control">
        <label for="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model.trim="form.email"
          @blur="validateEmail"
          v-debounce:300="validateEmail"
          :class="{ invalid: !emailIsValid }"
        />
        <p v-if="!emailIsValid" class="error-message">Please input a correct email</p>
      </div>
      <div class="form-control">
        <label for="message"></label>
        <textarea
          type="text"
          name="message"
          id="message"
          rows="5"
          placeholder="Message"
          v-model.trim="form.message"
        />
      </div>
    </div>
    <base-button @click="validateForm" class="form-submit">Submit</base-button>
  </form>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: ''
    })

    const formIsValid = ref(false)
    const nameIsValid = ref(true)
    const emailIsValid = ref(true)

    const formSubmit = function () {
      if (!formIsValid.value) return
      console.log(form)
      form.name = ''
      form.email = ''
      form.message = ''
    }

    const validateName = function () {
      if (form.name) {
        nameIsValid.value = true
      } else {
        nameIsValid.value = false
      }
    }

    const validateEmail = function () {
      if (form.email && form.email.includes('@')) {
        emailIsValid.value = true
      } else {
        emailIsValid.value = false
      }
    }

    const validateForm = function () {
      validateName()
      validateEmail()
      if (nameIsValid.value && emailIsValid.value) {
        formIsValid.value = true
      } else {
        formIsValid.value = false
      }
    }

    return {
      form,
      formSubmit,
      validateForm,
      validateName,
      validateEmail,
      nameIsValid,
      emailIsValid,
      formIsValid
    }
  }
}
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;
  margin-bottom: 9.6rem;
  z-index: 1;
}
.contact-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  background: #40916c;
  width: 75rem;
  border-radius: 4px;
  height: 40rem;
  box-shadow: 2px 2px 5px 1.5px rgba(0, 0, 0, 0.3);
}

.form-control {
  position: relative;
}

input {
  height: 4.5rem;
}
textarea {
  height: 15rem;
  padding-top: 0.6rem;
  resize: none;
}

textarea,
input {
  width: 60rem;
  padding-left: 0.6rem;
  font-size: 2.4rem;
  font-family: sans-serif;
  color: #dee2e6;
  background: #333533;
  border: none;
}

textarea,
input:focus {
  outline: none;
}

input:-webkit-autofill {
  -webkit-text-fill-color: #dee2e6 !important;
  box-shadow: 0 0 0 1000px #333533 inset;
  caret-color: #dee2e6;
}

.error-message {
  position: absolute;
  left: 0;
  top: 105%;
  font-size: 1.4rem;
}

.invalid {
  border: 2px solid rgb(255, 0, 0);
}

.form-submit {
  transition: all 0.3s ease;
  margin-bottom: 3.2rem;
}

.form-submit:hover {
  color: #333533;
}
</style>
