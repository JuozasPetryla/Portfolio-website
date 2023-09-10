<template>
  <section class="home-section">
    <base-background></base-background>
    <Transition name="title">
      <div class="landing-page-container">
        <div class="rectangle" v-if="show"></div>
        <h1>JUOZAS PETRYLA</h1>
        <h2>WEB DEVELOPER</h2>
      </div>
    </Transition>
    <router-link to="/contact">
      <base-button @click="$emit('triggerAnimation')" class="btn"> CONTACT ME </base-button>
    </router-link>
  </section>
</template>

<script>
import useAnimation from '../mixins/animation'
import BaseBackground from '../components/UI/BaseBackground.vue'
export default {
  components: { BaseBackground },
  setup() {
    const show = useAnimation()
    return { show }
  }
}
</script>

<style scoped>
.home-section {
  height: 92.4vh;
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  background: #333533;
  grid-template-rows: 1fr 1fr;
  gap: 9.6rem;
  position: relative;
}

.landing-page-container {
  margin-top: 20rem;
  line-height: 1.1;
  position: relative;
  padding: 1.2rem;
}

.rectangle {
  background: #333533;
  position: absolute;
  left: -1%;
  width: 100%;
  height: 20rem;
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

.landing-page-container h1 {
  font-size: 12.6rem;
  color: #dee2e6;
  letter-spacing: 3px;
  text-shadow: 5px 5px #52b788;
}

.landing-page-container h2 {
  font-size: 4.8rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  color: #dee2e6;
}
@media (max-width: 1140px) {
  .landing-page-container h1 {
    font-size: 9.6rem;
  }

  .rectangle {
    width: 100%;
    height: 14rem;
  }

  .landing-page-container h2 {
    font-size: 3.2rem;
  }
}

@media (max-width: 992px) {
  .landing-page-container h1 {
    font-size: 7.8rem;
  }

  .rectangle {
    width: 100%;
    height: 12rem;
  }

  .landing-page-container h2 {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .home-section {
    grid-template-rows: 0.5fr 0.5fr;
    gap: 6.4rem;
  }
  .landing-page-container h1 {
    font-size: 6rem;
  }

  .rectangle {
    width: 100%;
    height: 10rem;
  }

  .landing-page-container h2 {
    font-size: 2.4rem;
  }
}
@media (max-width: 580px) {
  .home-section {
    gap: 4.8rem;
  }
  .landing-page-container h1 {
    font-size: 4.8rem;
  }

  .landing-page-container {
    margin-top: 15rem;
  }

  .rectangle {
    width: 100%;
    height: 8rem;
    border-left: 7px solid #40916c;
  }

  .landing-page-container h2 {
    font-size: 2rem;
  }
}
@media (max-width: 480px) {
  .home-section {
    gap: 0rem;
  }
  .landing-page-container h1 {
    font-size: 3.2rem;
  }

  .landing-page-container {
    margin-top: 12.5rem;
  }

  .rectangle {
    height: 6rem;
    border-left: 5px solid #40916c;
  }

  .landing-page-container h2 {
    font-size: 2rem;
  }
}

@media (max-width: 350px) {
  .home-section {
    grid-template-rows: 1fr 1.5fr;
  }
  .landing-page-container h1 {
    font-size: 2.6rem;
    text-shadow: 3px 3px #52b788;
  }

  .landing-page-container {
    margin-top: 10rem;
  }

  .rectangle {
    height: 4.5rem;
    border-left: 4px solid #40916c;
  }

  .landing-page-container h2 {
    font-size: 1.6rem;
  }
}
</style>
