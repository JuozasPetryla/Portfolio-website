<template>
  <div class="skill-icon-container" v-on:mouseenter="showTooltip" v-on:mouseleave="hideTooltip">
    <base-tooltip :style="tooltipOpacity">
      <slot name="logo"></slot>
    </base-tooltip>
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

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-enter-to {
  opacity: 1;
}
</style>
