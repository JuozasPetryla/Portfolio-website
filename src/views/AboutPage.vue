<template>
  <section class="about-section">
    <base-background></base-background>
    <div class="about-header">
      <div class="about-title-container">
        <div class="rectangle" v-if="show"></div>
        <h2>About me</h2>
      </div>
      <div class="image-container" :class="show">
        <img src="../assets/NuotraukaPortfolio.webp" class="image" />
      </div>
    </div>
    <div class="about-text-container">
      <p>
        I am a Web Developer and a first year software engineering student in Kaunas University of
        Technology. I fell in love with programming before my first year of university. Since then,
        I have been striving to learn more about new technologies in the field and improve my
        skills.
      </p>
    </div>
    <skills-section></skills-section>
  </section>
</template>

<script>
import { ref } from 'vue'
import useAnimation from '../mixins/animation'

import SkillsSection from '../components/about/SkillsSection.vue'
export default {
  components: {
    SkillsSection
  },
  setup() {
    const show = useAnimation()
    const scale = ref(0)
    if (show === false) {
      scale.value = 0
    } else {
      scale.value = 1
    }
    return { show, scale }
  }
}
</script>

<style scoped>
.about-section {
  height: 100%;
  width: 100%;
  background: #333533;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-rows: 1fr 0.5fr 2fr;
  gap: 9.6rem;
  overflow: hidden;
  position: relative;
}

.about-header {
  margin-top: 6.4rem;
  display: flex;
  gap: 6.4rem;
  align-items: center;
}

.image-container {
  border: 20px solid #40916c;
  border-radius: 1000px;
  width: 45rem;
  height: 45rem;
  overflow: hidden;
  animation: image 0.7s 1 cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 1;
}

@keyframes image {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
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
  width: 75%;
}

.about-text-container p {
  font-size: 4rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  color: #dee2e6;
  text-align: left;
}

@media (max-width: 1220px) {
  .about-section {
    grid-template-rows: 1fr 0.5fr 1.5fr;
  }
}
@media (max-width: 1140px) {
  .about-title-container h2 {
    font-size: 9.6rem;
  }
  .image-container {
    width: 35rem;
    height: 35rem;
  }

  .image {
    width: 100%;
    height: auto;
  }
  .about-section {
    grid-template-rows: 1fr 0.5fr 1.5fr;
  }
}

@media (max-width: 992px) {
  .about-text-container p {
    font-size: 3.2rem;
  }
  .about-text-container {
    width: 85%;
  }
  .about-section {
    gap: 4.8rem;
  }

  .about-title-container h2 {
    font-size: 7.8rem;
  }
  .image-container {
    width: 30rem;
    height: 30rem;
  }

  .rectangle {
    height: 10rem;
  }
  .image {
    width: 100%;
    height: auto;
  }
  .about-section {
    grid-template-rows: 1fr 0.5fr 1.5fr;
  }
}

@media (max-width: 768px) {
  .about-text-container p {
    font-size: 2.4rem;
  }
  .about-text-container {
    width: 80%;
  }
  .about-section {
    grid-template-rows: 0.75fr 0.5fr 1.25fr;

    gap: 3rem;
  }

  .about-header {
    margin-top: 2.4rem;
  }
  .about-title-container h2 {
    font-size: 6.4rem;
  }
  .image-container {
    width: 25rem;
    height: 25rem;
  }

  .rectangle {
    height: 8rem;
  }
  .image {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 660px) {
  .about-header {
    flex-direction: column-reverse;
    gap: 3.2rem;
  }
}

@media (max-width: 580px) {
  .about-text-container p {
    font-size: 2rem;
  }

  .about-section {
    gap: 2.4rem;
  }

  .about-title-container h2 {
    font-size: 5.2rem;
  }
  .image-container {
    width: 20rem;
    height: 20rem;
    border: 10px solid #40916c;
  }

  .rectangle {
    border-left: 7px solid #40916c;
    height: 7rem;
  }
  .image {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .about-text-container p {
    font-size: 1.8rem;
  }

  .about-section {
    gap: 2rem;
  }

  .about-title-container h2 {
    font-size: 3.8rem;
  }
  .image-container {
    width: 18rem;
    height: 18rem;
  }

  .rectangle {
    border-left: 5px solid #40916c;
    height: 5rem;
  }
  .image {
    width: 100%;
    height: auto;
  }
}
@media (max-width: 350px) {
  .about-text-container p {
    font-size: 1.6rem;
  }

  .about-section {
    gap: 1.2rem;
  }

  .about-title-container h2 {
    font-size: 3.2rem;
    text-shadow: 3px 3px #52b788;
  }
  .image-container {
    width: 15rem;
    height: 15rem;
  }

  .rectangle {
    border-left: 4px solid #40916c;
    height: 4rem;
  }
  .image {
    width: 100%;
    height: auto;
  }
}
</style>
