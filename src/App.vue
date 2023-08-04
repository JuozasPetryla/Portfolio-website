<template>
  <div id="app">
    <the-header @triggerAnimation="onTriggerAnimation"></the-header>
    <transition name="route">
      <div class="transition-rect" v-if="page"></div>
    </transition>
    <transition name="inital">
      <div class="page-load" v-if="loaded">
        <loading-screen></loading-screen>
      </div>
    </transition>
    <router-view @triggerAnimation="onTriggerAnimation"></router-view>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import LoadingScreen from './components/layout/LoadingScreen.vue'

import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader,
    LoadingScreen
  },

  setup() {
    const page = ref(false)
    const loaded = ref(false)

    const loadingAnimation = function () {
      loaded.value = true
      setTimeout(() => (loaded.value = false), 4000)
    }

    const onTriggerAnimation = function () {
      page.value = true
      setTimeout(() => (page.value = false), 2000)
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

    return { page, onTriggerAnimation, loaded }
  }
}
</script>

<style scoped>
#app {
  overflow: hidden;
}
.transition-rect {
  background: #2a2929;
  position: absolute;
  top: 7.8%;
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
  animation: enterInitial 2s 1 cubic-bezier(0.19, 1, 0.22, 1) 5s forwards;
}

.route-enter-active {
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
.route-leave-active {
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards reverse;
}

.initial-enter-active {
  animation: enterInitial 2s 1 cubic-bezier(0.19, 1, 0.22, 1) 5s forwards;
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
    top: 7.8%;
  }

  100% {
    bottom: 100%;
    top: 7.8%;
  }
}

@media (max-width: 1550px) {
  .transition-rect {
    top: 8%;
  }
  @keyframes enterPage {
    0% {
      top: 100%;
      bottom: 0;
    }

    50% {
      bottom: 0;
      top: 8%;
    }

    100% {
      bottom: 100%;
      top: 8%;
    }
  }
}
@media (max-width: 1220px) {
  .transition-rect {
    top: 8%;
  }
  @keyframes enterPage {
    0% {
      top: 100%;
      bottom: 0;
    }

    50% {
      bottom: 0;
      top: 8%;
    }

    100% {
      bottom: 100%;
      top: 8%;
    }
  }
}

@media (max-width: 1140px) {
  .transition-rect {
    top: 8.2%;
  }
  @keyframes enterPage {
    0% {
      top: 100%;
      bottom: 0;
    }

    50% {
      bottom: 0;
      top: 8.2%;
    }

    100% {
      bottom: 100%;
      top: 8.2%;
    }
  }
}

@media (max-width: 992px) {
  .transition-rect {
    top: 8.2%;
  }
  @keyframes enterPage {
    0% {
      top: 100%;
      bottom: 0;
    }

    50% {
      bottom: 0;
      top: 8.2%;
    }

    100% {
      bottom: 100%;
      top: 8.2%;
    }
  }
}
</style>
