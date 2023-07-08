<template>
  <section class="home-section" :class="imageNumber">
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
import { ref, computed, onMounted, onUpdated } from 'vue'
export default {
  setup() {
    const bgChanged = ref(1)
    const showTitle = ref(false)

    function changeBg() {
      setTimeout(() => {
        bgChanged.value++
        if (bgChanged.value > 5) {
          bgChanged.value = 1
        }
      }, 4000)
    }

    const imageNumber = computed(function () {
      return 'background-' + bgChanged.value
    })

    onMounted(() => {
      changeBg()
      showTitle.value = true
    })

    onUpdated(() => {
      changeBg()
    })

    return {
      bgChanged,
      showTitle,
      imageNumber
    }
  }
}
</script>

<style scoped>
.background-1 {
  background-image: url('src/assets/low-poly-grid-haikei (1).svg');
}
.background-2 {
  background-image: url('src/assets/low-poly-grid-haikei (2).svg');
}
.background-3 {
  background-image: url('src/assets/low-poly-grid-haikei (3).svg');
}
.background-4 {
  background-image: url('src/assets/low-poly-grid-haikei (4).svg');
}
.background-5 {
  background-image: url('src/assets/low-poly-grid-haikei (5).svg');
}
.home-section {
  /* background: #333533; */
  height: 100vh;
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;

  grid-template-rows: 1fr 1fr;
  gap: 9.6rem;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  transition: all 0.5s;
  overflow: hidden;
}

.landing-page-container {
  margin-top: 20rem;
  line-height: 1.1;
  position: relative;
  padding: 1.2rem;
}

.rectangle {
  /* background: #333533; */
  position: absolute;
  left: -1%;
  width: 100%;
  height: 20rem;
  border-left: 10px solid #40916c;
  animation: moveRect 3s 1 cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
}

@keyframes moveRect {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
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
  text-shadow: 2px 2px 2px black;
  color: #dee2e6;
}

.btn,
.btn:visited {
  box-shadow: 3px 2px 3px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.4s;
}

.btn:hover,
.btn:active {
  cursor: pointer;
  box-shadow: 3px 2px 3px 3px rgba(0, 0, 0, 0.3);
  transform: translateY(4%);
  background: #40916c;
  color: #adb5bd;
  border-radius: 100px;
}

.btn:active {
  transform: translateY(10%);
}
</style>
