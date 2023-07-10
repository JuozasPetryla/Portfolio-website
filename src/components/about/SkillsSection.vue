<template>
  <div class="skills-section">
    <h3>My skills</h3>
    <div class="skill-container">
      <skill-icons>
        <template #logo><p>HTML</p></template>

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
      </skill-icons>
      <skill-icons>
        <template #logo><p>CSS</p></template>

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
      </skill-icons>
      <skill-icons>
        <template #logo><p>JavaScript</p></template>

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
      </skill-icons>
      <skill-icons>
        <template #logo><p>Vue</p></template>
        <svg
          width="2500"
          height="2158"
          viewBox="0 0 256 221"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          class="skill-icon"
        >
          <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883" />
          <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883" />
          <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E" />
        </svg>
      </skill-icons>
      <skill-icons>
        <template #logo><p>Git</p></template>
        <svg
          width="2500"
          height="2500"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMin meet"
          class="skill-icon"
        >
          <path
            d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
            fill="#DE4C36"
          />
        </svg>
      </skill-icons>
    </div>
  </div>
</template>

<script>
import SkillIcons from './SkillIcons.vue'
export default {
  components: {
    SkillIcons
  }
}
</script>

<style scoped>
.skills-section {
  display: grid;
  grid-template-rows: 1fr 3fr;
  justify-items: center;
}

.skills-section h3 {
  font-size: 9.6rem;
  color: #dee2e6;
  letter-spacing: 3px;
  text-shadow: 5px 5px #52b788;
  padding-right: 1.2rem;
  border-bottom: 3px solid #40916c;
  width: 110rem;
  text-align: center;
}

.skill-container {
  display: flex;
  height: 27.5rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.2rem;
}
.skill-icon {
  width: 10.4em;
  height: 10.4em;
}
</style>
