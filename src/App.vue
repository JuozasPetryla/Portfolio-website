<template>
  <the-header @triggerAnimation="onTriggerAnimation"></the-header>
  <transition>
    <div class="transition-rect" v-if="page"></div>
  </transition>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import { ref } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader
  },

  setup() {
    const page = ref(false)

    const onTriggerAnimation = function () {
      page.value = true

      setTimeout(() => (page.value = false), 2000)
    }

    return { page, onTriggerAnimation }
  }
}
</script>

<style scoped>
.transition-rect {
  background: #1b1a1a;
  position: absolute;
  top: 7.8%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.v-enter-active {
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards;
}
.v-leave-active {
  animation: enterPage 2s 1 cubic-bezier(0.19, 1, 0.22, 1) forwards reverse;
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
</style>
