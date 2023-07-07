<template>
  <div class="landing-page-container">
    <div class="landing-page-shape-container">
      <div class="landing-page-shape-right-container">
        <transition name="name">
          <h2 v-if="show">JUOZAS<br />PETRYLA</h2>
        </transition>
        <Transition name="r-triangle">
          <div class="landing-page-shape-right" v-if="show"></div>
        </Transition>
      </div>
      <div class="landing-page-shape-left-container">
        <transition name="dev">
          <h2 v-if="show">WEB<br />DEVELOPER</h2>
        </transition>
        <transition name="l-triangle">
          <div class="landing-page-shape-left" v-if="show"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const show = ref(false)

    onMounted(() => (show.value = true))

    return {
      show
    }
  }
}
</script>

<style scoped>
.landing-page-shape-container {
  position: relative;
  margin: 2.4rem 2.4rem;
  height: 100vh;
}

.landing-page-shape-right-container {
  position: absolute;
  height: 45%;
  width: 100%;
  top: 2%;
}
.landing-page-shape-left-container {
  position: absolute;
  height: 45%;
  width: 100%;
  top: 47.5%;
}
.landing-page-shape-right {
  margin-top: 4.8rem;
  background: #40916c;
  height: 100%;
  clip-path: polygon(50% 0, 50% 100%, 50% 100%, 15% 50%);
}
.landing-page-shape-left {
  background: #2d6a4f;
  height: 100%;
  clip-path: polygon(50% 0, 85% 50%, 50% 100%, 50% 50%);
}

.landing-page-shape-left-container h2 {
  font-size: 7.2rem;
  position: absolute;
  top: 19%;
  left: 12.5%;
  text-align: right;
}
.landing-page-shape-right-container h2 {
  position: absolute;
  font-size: 7.2rem;
  position: absolute;
  top: 36%;
  left: 51%;
}

.r-triangle-enter-from {
  opacity: 0;
  transform: translateX(10%);
}

.r-triangle-enter-active {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.r-triangle-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.l-triangle-enter-from {
  opacity: 0;
  transform: translateX(-10%);
}

.l-triangle-enter-active {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.l-triangle-enter-to {
  opacity: 1;
}

.name-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.name-enter-active {
  transition: all 1.2s 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.name-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.dev-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.dev-enter-active {
  transition: all 1.2s 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.dev-enter-to {
  transform: translateX(0);
  opacity: 1;
}
</style>
