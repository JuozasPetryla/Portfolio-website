<template>
  <div class="form-message">
    <div class="form-back">
      <h2>Thank you for your submission!</h2>
      <router-link to="/">
        <base-button @click="$emit('triggerAnimation')">Back to home</base-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import BaseButton from '../components/UI/BaseButton.vue'
export default {
  components: { BaseButton },
  name: 'FormSuccess'
}
</script>

<style scoped>
.form-message {
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
}

.form-back {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
}

h2 {
  font-size: 4.8rem;
}

@media (max-width: 992px) {
  h2 {
    font-size: 4rem;
  }
}
@media (max-width: 768px) {
  h2 {
    font-size: 3.2rem;
  }
}
@media (max-width: 660px) {
  h2 {
    font-size: 3rem;
  }
}
@media (max-width: 580px) {
  h2 {
    font-size: 2.4rem;
  }
}
@media (max-width: 480px) {
  h2 {
    font-size: 1.8rem;
  }
}
@media (max-width: 350px) {
  h2 {
    font-size: 1.4rem;
  }
}
</style>
