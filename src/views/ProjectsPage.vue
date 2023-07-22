<template>
  <section class="projects-section">
    <div class="projects-title-container">
      <div class="rectangle" v-if="show"></div>
      <h2>Projects</h2>
    </div>
    <base-card>
      <template #image>
        <img
          class="power-tower"
          src="../assets/PowerTowerImage.png"
          alt="Image of a fake gym landing page"
        />
      </template>
      <template #content>
        <p>A fictional powerlifting gym landing page.</p>
      </template>
      <template #logos>
        <svg
          fill="none"
          height="2500"
          width="2183"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 124 141.53199999999998"
          class="skill-icon"
          v-on:mouseenter="showTooltip"
          v-on:mouseleave="hideTooltip"
        >
          <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" />
          <path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" />
          <path
            d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
            fill="#fff"
          />
        </svg>
        <svg
          fill="none"
          height="2500"
          width="2183"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 124 141.53"
          class="skill-icon"
          v-on:mouseenter="showTooltip"
          v-on:mouseleave="hideTooltip"
        >
          <path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" />
          <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
          <path
            d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
            fill="#fff"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2500"
          height="2500"
          viewBox="0 0 1052 1052"
          class="skill-icon"
        >
          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
          <path
            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
            fill="#323330"
          />
        </svg>
      </template>
      <template #button-1><a href="https://powertower.netlify.app/">Visit site</a></template>
      <template #button-2
        ><a href="https://github.com/JuozasPetryla/landing-page">Project GitHub</a></template
      >
    </base-card>
  </section>
</template>

<script>
import useAnimation from '../mixins/animation'
export default {
  setup() {
    const show = useAnimation()
    return { show }
  }
}
</script>

<style scoped>
.projects-section {
  height: 100vh;
  width: 100%;
  background: #333533;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-rows: 1fr 2fr;
  padding-bottom: 9.6rem;
  overflow: hidden;
}
.projects-title-container {
  margin-top: 2.4rem;
  position: relative;
}

.rectangle {
  background: #333533;
  position: absolute;
  left: -1%;
  width: 100%;
  top: 10%;
  height: 16rem;
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

.projects-title-container h2 {
  font-size: 12.6rem;
  letter-spacing: 3px;
  text-shadow: 5px 5px #52b788;
  padding-right: 1.2rem;
}

.power-tower {
  width: 100%;
  height: auto;
}

.skill-icon {
  width: 6.4rem;
  height: 6.4rem;
}
</style>
