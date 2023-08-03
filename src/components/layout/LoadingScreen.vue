<template>
  <div class="progress-bar">
    <div class="progress"></div>
    <p>{{ percentage + '%' }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const percentage = ref(0)

    setInterval(() => {
      if (percentage.value === 100) clearInterval(this)
      else percentage.value++
    }, 35)

    return {
      percentage
    }
  }
}
</script>

<style scoped>
.progress-bar {
  display: flex;
  height: 5rem;
  width: 80rem;
  border: 8px solid #52b788;
  z-index: 5;
  position: relative;
  position: absolute;
  top: 50%;
  left: 30%;
  animation: fade-out 1.5s cubic-bezier(0.175, 0.885, 0.32, 1) 3.5s forwards;
}

.progress {
  position: absolute;
  top: 15%;
  left: 1%;
  bottom: 15%;
  right: 1%;
  background: #52b788;
  transform: scaleX(0);
  transform-origin: left;
  animation: progress 3s cubic-bezier(0.65, 0.65, 0.6, 1) forwards;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes progress {
  0% {
    transform: scaleX(0);
  }

  90% {
  }
  100% {
    transform: scaleX(1);
  }
}

p {
  position: absolute;
  right: 0;
  top: 125%;
  font-size: 2.4rem;
  color: #52b788;
}
</style>
