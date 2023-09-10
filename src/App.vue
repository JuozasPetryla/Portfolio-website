<template>
  <div id="app" :class="{ 'fixed-pos': positionFixed }">
    <the-header @triggerAnimation="onTriggerAnimation"></the-header>
    <transition name="route">
      <div class="transition-rect" v-if="page"></div>
    </transition>
    <transition name="inital">
      <div class="page-load" v-if="loaded">
        <loading-screen></loading-screen>
      </div>
    </transition>
    <div :class="{ 'disable-scroll': positionFixed }">
      <router-view @triggerAnimation="onTriggerAnimation"></router-view>
    </div>
    <the-footer :class="{ hidden: page }"></the-footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import LoadingScreen from './components/layout/LoadingScreen.vue'
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    LoadingScreen
  },

  setup() {
    const page = ref(false)
    const loaded = ref(false)
    const positionFixed = ref(false)

    const loadingAnimation = function () {
      loaded.value = true
      positionFixed.value = true
      setTimeout(() => {
        positionFixed.value = false
        loaded.value = false
      }, 4000)
    }

    const onTriggerAnimation = function () {
      positionFixed.value = true
      page.value = true
      setTimeout(() => {
        positionFixed.value = false
        page.value = false
      }, 2000)
    }

    onMounted(() => {
      onTriggerAnimation()
      const hasExecuted = sessionStorage.getItem('functionExecuted')

      if (hasExecuted === 'true') {
        return
      } else {
        loadingAnimation()
        sessionStorage.setItem('functionExecuted', 'true')
      }
    })

    return { page, onTriggerAnimation, loaded, positionFixed }
  }
}
</script>

<style scoped>
#app {
  overflow: hidden;
}

.hidden {
  opacity: 0;
}
.disable-scroll {
  max-height: 80vh;
  width: 100vw;
}

.transition-rect {
  background: #2a2929;
  position: absolute;
  top: 7.2rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.page-load {
  background: #2a2929;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 5;
  animation: enterInitial 2s 1 cubic-bezier(0.19, 1, 0.22, 1) 6s forwards;
}

.route-enter-active {
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
.route-leave-active {
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards reverse;
}

.initial-enter-active {
  animation: enterInitial 2s 1 cubic-bezier(0.19, 1, 0.22, 1) 6s forwards;
}

@keyframes enterInitial {
  0% {
    top: 0;
  }

  100% {
    top: 100%;
  }
}
@keyframes enterPage {
  0% {
    top: 100%;
    bottom: 0;
  }

  50% {
    bottom: 0;
    top: 7.2rem;
  }

  100% {
    bottom: 100%;
    top: 7.2rem;
  }
}

@media (max-width: 768px) {
  .disable-scroll {
    max-height: 59vh;
  }
}

@media (max-width: 660px) {
  .transition-rect {
    top: 4.8rem;
  }
  .disable-scroll {
    max-height: 76vh;
  }
  @keyframes enterPage {
    0% {
      top: 100%;
      bottom: 0;
    }

    50% {
      bottom: 0;
      top: 4.8rem;
    }

    100% {
      bottom: 100%;
      top: 4.8rem;
    }
  }
}

@media (max-width: 480px) {
  .transition-rect {
    top: 3.6rem;
  }
  .disable-scroll {
    max-height: 81vh;
  }
  @keyframes enterPage {
    0% {
      top: 100%;
      bottom: 0;
    }

    50% {
      bottom: 0;
      top: 3.6rem;
    }

    100% {
      bottom: 100%;
      top: 3.6rem;
    }
  }
}

@media (max-width: 350px) {
  .disable-scroll {
    max-height: 85vh;
  }
}
</style>
