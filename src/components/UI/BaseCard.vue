<template>
  <div class="card-container" @mouseenter="mouseOnProject" @mouseleave="mouseOffProject">
    <div class="card-image-container">
      <slot name="image"></slot>
    </div>
    <transition name="come-in">
      <div class="card-content" v-if="hoverProject">
        <div class="card-content-text">
          <slot name="content"></slot>
        </div>
        <div class="technologies-logos">
          <h4>Made with:</h4>
          <slot name="logos"></slot>
        </div>
        <div class="card-buttons">
          <base-button><slot name="button-1"></slot></base-button>
          <base-button><slot name="button-2"></slot></base-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const hoverProject = ref(false)

    function mouseOnProject() {
      console.log('hi')
      hoverProject.value = true
    }
    function mouseOffProject() {
      hoverProject.value = false
    }

    return {
      hoverProject,
      mouseOffProject,
      mouseOnProject
    }
  }
}
</script>

<style scoped>
.card-container {
  width: 90rem;
  height: 41rem;
  box-shadow: 1px 1px 1.5px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.card-container:hover {
  transform: scale(99%);
}

.card-image-container {
  width: 100%;
  height: 100%;
}

.card-buttons {
  display: flex;
  justify-content: space-around;
}

.card-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(45, 106, 79, 0.2));
  color: #dee2e6;
  font-size: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  box-shadow: 0 -2px 5px 2px rgba(0, 0, 0, 0.3);
  padding: 3.2rem 3.2rem 1.2rem 3.2rem;
}

.card-content h4 {
  font-size: 3.6rem;
}

.card-button {
  width: 19.5rem;
  font-size: 2.4rem;
  color: #333533;
}

.technologies-logos {
  display: flex;
  gap: 3.2rem;
}

.come-in-enter-from,
.come-in-leave-to {
  opacity: 0;
  z-index: -1;
  transform: translateY(-10%);
}

.come-in-enter-active,
.come-in-leave-active {
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.come-in-leave-from,
.come-in-enter-to {
  opacity: 1;
  z-index: 1;
  transform: translateY(0);
}
</style>
