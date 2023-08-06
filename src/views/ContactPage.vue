<template>
  <section class="contact-section">
    <base-background></base-background>
    <div class="contact-title-container">
      <div class="rectangle" v-if="show"></div>
      <h2>Contact me</h2>
    </div>
    <h4>If you have any questions, or just want to talk, please feel free to contact me!</h4>
    <contact-form @triggerAnimation="$emit('triggerAnimation')"></contact-form>
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
  height: 100%;
  width: 100%;
  background: #333533;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-rows: 2fr 1fr 5fr;
  gap: 4.8rem;
  position: relative;
  overflow: hidden;
}

.contact-section h4 {
  text-align: center;
  font-size: 3.2rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  width: 70%;
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

@media (max-width: 992px) {
  .contact-title-container h2 {
    font-size: 9.6rem;
  }
  .rectangle {
    height: 12rem;
  }
}

@media (max-width: 768px) {
  .contact-title-container h2 {
    font-size: 8rem;
  }
  .rectangle {
    border-left: 7px solid #40916c;
    height: 9rem;
  }
  .contact-section h4 {
    font-size: 3rem;
  }
}
@media (max-width: 660px) {
  .contact-title-container h2 {
    font-size: 7.2rem;
  }
  .rectangle {
    border-left: 5px solid #40916c;
    height: 8rem;
  }
  .contact-section h4 {
    font-size: 2.4rem;
  }

  .contact-section {
    grid-template-rows: 0.5fr 0.5fr 3.5fr;

    gap: 2.4rem;
  }
}
@media (max-width: 480px) {
  .contact-title-container h2 {
    font-size: 4.8rem;
  }
  .rectangle {
    border-left: 5px solid #40916c;
    height: 5.5rem;
  }
  .contact-section h4 {
    font-size: 2rem;
  }

  .contact-section {
    grid-template-rows: 1fr 1fr 3fr;

    gap: 2rem;
  }
}
@media (max-width: 480px) {
  .contact-title-container h2 {
    font-size: 3.2rem;
  }
  .rectangle {
    border-left: 4px solid #40916c;
    height: 4.5rem;
  }
  .contact-section h4 {
    font-size: 1.4rem;
  }

  .contact-section {
    grid-template-rows: 0.3fr 0.3fr 3fr;

    gap: 2rem;
  }
}
</style>
