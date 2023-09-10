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
          <slot name="button-1"></slot>

          <slot name="button-2"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
export default {
  components: { BaseButton },
  setup() {
    const hoverProject = ref(false)

    function mouseOnProject() {
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
  width: 75rem;
  height: 34rem;
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
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
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
@media (max-width: 992px) {
  .card-container {
    width: 65rem;
    height: 29rem;
  }
  .card-content {
    font-size: 1.8rem;
  }
  .card-content h4 {
    font-size: 2.4rem;
  }
}

@media (max-width: 768px) {
  .card-container {
    width: 57.5rem;
    height: 26rem;
  }
  .card-content {
    font-size: 1.6rem;
  }
  .card-content h4 {
    font-size: 2rem;
  }
  .technologies-logos {
    gap: 2.4rem;
  }
}
@media (max-width: 768px) {
  .card-container {
    width: 52.5rem;
    height: 23.5rem;
  }
  .card-content {
    font-size: 1.6rem;
  }
  .card-content h4 {
    font-size: 2rem;
  }
  .technologies-logos {
    gap: 2.4rem;
  }
}
@media (max-width: 580px) {
  .card-container {
    width: 45rem;
    height: 20rem;
  }
  .card-content {
    font-size: 1.2rem;
    gap: 1.2rem;
  }
  .card-content h4 {
    font-size: 2rem;
  }
  .technologies-logos {
    gap: 2.4rem;
  }
}
@media (max-width: 480px) {
  .card-container {
    width: 32.5rem;
    height: 14.5rem;
  }
  .card-content {
    font-size: 1.2rem;
    gap: 0.6rem;
    padding: 1rem;
  }
  .card-content h4 {
    font-size: 1.4rem;
  }
  .technologies-logos {
    gap: 2rem;
  }
}
@media (max-width: 350px) {
  .card-container {
    width: 27rem;
    height: 12rem;
  }
  .card-content {
    font-size: 1rem;
    gap: 0.4rem;
    padding: 1rem;
  }
  .card-content h4 {
    font-size: 1.4rem;
  }
  .technologies-logos {
    gap: 1.2rem;
  }
}
</style>
