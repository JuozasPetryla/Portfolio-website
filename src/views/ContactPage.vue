<template>
  <section class="contact-section">
    <div class="contact-title-container">
      <div class="rectangle" v-if="show"></div>
      <h2>Contact me</h2>
    </div>
    <contact-form></contact-form>
  </section>
</template>

<script>
import ContactForm from '../components/form/ContactForm.vue'
import useAnimation from '../mixins/animation'
export default {
  components: {
    ContactForm
  },
  setup() {
    const show = useAnimation()
    return { show }
  }
}
</script>

<style scoped>
.contact-section {
  height: 100vh;
  width: 100%;
  background: #333533;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-rows: 1fr 3fr;
  gap: 9.6rem;
  overflow: hidden;
}
.contact-title-container {
  margin-top: 2.4rem;
  position: relative;
}

.rectangle {
  background: #333533;
  position: absolute;
  left: -1%;
  width: 100%;
  top: 10%;
  height: 16rem;
  border-left: 10px solid #40916c;
  animation: moveRect 1s 1 cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
}

@keyframes moveRect {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
    width: 1%;
  }
}

.contact-title-container h2 {
  font-size: 12.6rem;
  letter-spacing: 3px;
  text-shadow: 5px 5px #52b788;
  padding-right: 1.2rem;
}
</style>
