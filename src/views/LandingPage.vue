<template>
  <section class="home-section">
    <base-background></base-background>
    <div class="transition-rect"></div>
    <div class="transition-rect-two"></div>
    <div class="transition-rect-three"></div>
    <Transition name="title">
      <div class="landing-page-container">
        <div class="rectangle" v-if="show"></div>
        <h1>JUOZAS PETRYLA</h1>
        <h2>WEB DEVELOPER</h2>
      </div>
    </Transition>
    <base-button class="btn">CONTACT ME</base-button>
  </section>
</template>

<script>
import BaseBackground from '../components/UI/BaseBackground.vue'
import useAnimation from '../mixins/animation'
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
  height: 100vh;
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
  animation: moveRect 1s 1 cubic-bezier(0.175, 0.885, 0.32, 1) forwards 1s;
}

.transition-rect {
  background: #3b3b3b;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  animation: enterPage 1s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
/* .transition-rect-two {
  background: #595959;
  position: absolute;
  top: 0;
  left: 0;
  right: -100%;
  bottom: 0;
  z-index: 5;
  animation-delay: 0.3s;
  animation: enterPage 1s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
} */
.transition-rect-three {
  background: #dee2e6;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  opacity: 0;
  animation: enterPageSecond 1s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
  animation-delay: 0.5s;
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

@keyframes enterPage {
  0% {
    right: 100%;
    left: 0;
  }

  50% {
    left: 0;
    right: 0;
  }

  100% {
    left: 100%;
    right: 0;
  }
}
@keyframes enterPageSecond {
  0% {
    right: 100%;
    left: 0;
  }

  50% {
    opacity: 1;
    left: 0;
    right: 0;
  }

  100% {
    left: 100%;
    right: 0;
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
</style>
