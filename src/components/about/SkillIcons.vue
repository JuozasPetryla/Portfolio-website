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
import { ref, computed } from 'vue'
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

    const tooltipOpacity = computed(function () {
      return { opacity: tooltipVisible.value ? '1' : '0' }
    })

    return {
      tooltipVisible,
      tooltipOpacity,
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
  opacity: 1;
}
</style>
