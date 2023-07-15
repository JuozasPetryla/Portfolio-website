<template>
  <div class="skill-icon-container" v-on:mouseenter="showTooltip" v-on:mouseleave="hideTooltip">
    <transition name="fade">
      <base-tooltip v-if="tooltipVisible">
        <slot name="logo"></slot>
      </base-tooltip>
    </transition>
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseTooltip from '../UI/BaseTooltip.vue'

export default {
  components: { BaseTooltip },

  setup() {
    const tooltipVisible = ref(false)

    function showTooltip() {
      tooltipVisible.value = true
    }
    function hideTooltip() {
      tooltipVisible.value = false
    }

    return {
      tooltipVisible,
      hideTooltip,
      showTooltip
    }
  }
}
</script>

<style scoped>
.skill-icon-container {
  display: flex;
  position: relative;
  justify-content: center;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20%);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.6s ease;
}

.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-enter-to,
.fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
