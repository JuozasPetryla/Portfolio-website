<template>
  <section class="home-section">
    <Transition name="title">
      <div class="landing-page-container">
        <div class="rectangle" v-if="showTitle"></div>
        <h1>JUOZAS PETRYLA</h1>
        <h2>WEB DEVELOPER</h2>
      </div>
    </Transition>
    <base-button class="btn">CONTACT ME</base-button>
  </section>
</template>

<script>
import useAnimation from '../mixins/animation'
export default {
  setup() {
    const showTitle = useAnimation()
    return { showTitle }
  }
}
</script>

<style scoped>
.home-section {
  background: #333533;
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  gap: 9.6rem;
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

.btn,
.btn:visited {
  box-shadow: 3px 2px 3px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
  position: relative;
  z-index: 1;
}

.btn:hover,
.btn:active {
  cursor: pointer;
  box-shadow: 3px 2px 3px 3px rgba(0, 0, 0, 0.3);
  transform: translateY(5%);
  color: #333533;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #74c69d;
  z-index: -1;
  transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: scaleX(0);
  transform-origin: left;
}

.btn:hover::before,
.btn:active::before {
  transform: scaleX(1);
}
</style>
