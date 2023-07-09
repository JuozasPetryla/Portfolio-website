<template>
  <section class="about-section">
    <div class="about-header">
      <div class="about-title-container">
        <div class="rectangle" v-if="showTitle"></div>
        <h2>About me</h2>
      </div>
      <div class="image-container" :style="{ transform: `scale(${scale})` }">
        <img src="../assets/NuotraukaPortfolio.jpg" />
      </div>
    </div>
    <div class="about-text-container">
      <p>
        I am a Web Developer and a first year student in Kaunas University of Technology. I fell in
        love with programming on my first year of university. Since then, I have been striving to
        learn more about the field and improve my skills. I am competent in HTML, CSS, Javascript
        and Vue.
      </p>
    </div>
    <h3>My skills</h3>
  </section>
</template>

<script>
import { ref } from 'vue'
import useAnimation from '../mixins/animation'
export default {
  setup() {
    const showTitle = useAnimation()
    const scale = ref(0)
    if (showTitle === false) {
      scale.value = 0
    } else {
      scale.value = 1
    }
    return { showTitle, scale }
  }
}
</script>

<style>
.about-section {
  height: 100vh;
  width: 100%;
  background: #333533;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-rows: 1fr 1fr;
  gap: 9.6rem;
}

.about-header {
  margin-top: 6.4rem;
  display: flex;
  /* flex-direction: column-reverse; */
  gap: 6.4rem;
  /* justify-content: space-between; */
  align-items: center;
}

.image-container {
  border: 20px solid #40916c;
  border-radius: 1000px;
  width: 45rem;
  height: 45rem;
  overflow: hidden;
  transition: transform 0.3s ease-out;
}

.about-title-container {
  position: relative;
}

.rectangle {
  background: #333533;
  position: absolute;
  left: -1%;
  width: 100%;
  top: 10%;
  height: 14rem;
  border-left: 10px solid #40916c;
  animation: moveRect 1s 1 cubic-bezier(0.175, 0.885, 0.32, 1) forwards;
}

@keyframes moveRect {
  0% {
    left: 0;
  }

  100% {
    left: 100%;
    width: 1%;
  }
}

.about-title-container h2 {
  font-size: 12.6rem;
  color: #dee2e6;
  letter-spacing: 3px;
  text-shadow: 5px 5px #52b788;
  padding-right: 1.2rem;
}

.about-text-container {
  display: flex;
  justify-content: center;
}

.about-text-container p {
  font-size: 3.2rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  color: #dee2e6;
  width: 35%;
  text-align: left;
}
</style>