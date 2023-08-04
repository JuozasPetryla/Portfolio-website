<template>
  <div class="skills-section">
    <h3>My skills</h3>
    <div class="skill-container">
      <div class="frontend">
        <h4>Front-end</h4>
        <skill-icons>
          <template #logo><p>HTML</p></template>
          <img src="../../assets/html-1.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>CSS</p></template>
          <img src="../../assets/css-3.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>JavaScript</p></template>
          <img src="../../assets/logo-javascript.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Vue</p></template>
          <img src="../../assets/vue-9.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Tailwind</p></template>
          <img src="../../assets/file_type_tailwind_icon_130128.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Vite</p></template>
          <img src="../../assets/vite-svgrepo-com.svg" class="skill-icon" />
        </skill-icons>
      </div>
      <div class="backend">
        <h4>Back-end</h4>
        <skill-icons>
          <template #logo><p>Express.js</p></template>
          <img src="../../assets/expressjs_logo_icon_169185.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Socket.io</p></template>
          <img src="../../assets/socket-io-icon.svg" class="skill-icon socket" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>SQLite</p></template>
          <img src="../../assets/sqlite_logo_icon_169724.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Postman</p></template>
          <img src="../../assets/postman-icon-svgrepo-com.svg" class="skill-icon" />
        </skill-icons>
      </div>
      <div class="other">
        <h4>Other</h4>
        <skill-icons>
          <template #logo><p>Git</p></template>
          <img src="../../assets/git-icon.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Gitlab</p></template>
          <img src="../../assets/gitlab-seeklogo.com.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Github</p></template>
          <img src="../../assets/github.svg" class="skill-icon" />
        </skill-icons>
      </div>
    </div>
    <base-button class="cv-button">Download CV</base-button>
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
  grid-template-rows: 1fr 2fr 1fr;
  justify-items: center;
}
.socket {
  width: auto;
  height: auto;
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

.backend,
.other,
.frontend {
  display: grid;
  place-items: center;
  row-gap: 5.6rem;
  column-gap: 2.8rem;
  place-items: center;
}

.frontend {
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 12rem 12rem 12rem;
}

.backend {
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 14rem 14rem;
}

.other {
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 14rem 14rem;
}

h4 {
  font-size: 6.4rem;
  color: #dee2e6;
  letter-spacing: 3px;
  text-shadow: 5px 5px #52b788;
  padding-right: 1.2rem;
  width: 110rem;
  text-align: center;
  grid-column: 1/-1;
}
.skill-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 8em;
  height: 27.5rem;
  place-items: center;
}
.skill-icon {
  width: 10.4em;
  height: 10.4em;
}
.cv-button {
  margin-bottom: 9.6rem;
}

@media (max-width: 1220px) {
  .skill-icon {
    width: 8.2em;
    height: 8.2em;
  }
  .frontend {
    grid-template-columns: 9.6rem 9.6rem 9.6rem;
  }

  .backend {
    grid-template-columns: 10.4rem 10.4rem;
  }

  .other {
    grid-template-columns: 10.4rem 10.4rem;
  }

  .backend,
  .other,
  .frontend {
    row-gap: 3.4rem;
    column-gap: 2.4rem;
  }

  .skill-container {
    column-gap: 5.5em;
  }
  .skills-section {
    grid-template-rows: 0.7fr 1.5fr 0.2fr;
  }
}

@media (max-width: 1140px) {
  .skills-section h3 {
    font-size: 8.2rem;
    width: 92rem;
  }
  h4 {
    font-size: 4.8rem;
  }

  .skill-icon {
    width: 6.4em;
    height: 6.4em;
  }
  .frontend {
    grid-template-columns: 8.2rem 8.2rem 8.2rem;
  }

  .backend {
    grid-template-columns: 9.6rem 9.6rem;
  }
  .backend,
  .other,
  .frontend {
    row-gap: 3.2rem;
    column-gap: 1.2rem;
  }

  .skill-container {
    column-gap: 5.5em;
  }
  .other {
    grid-template-columns: 9.6rem 9.6rem;
  }
  .skills-section {
    grid-template-rows: 0.5fr 1fr 0.2fr;
  }
}

@media (max-width: 992px) {
  .skills-section h3 {
    font-size: 6.4rem;
    width: 78rem;
  }
  h4 {
    font-size: 4rem;
  }
  .skill-icon {
    width: 4.8em;
    height: 4.8em;
  }
  .frontend {
    grid-template-columns: 6.4rem 6.4rem 6.4rem;
  }

  .backend {
    grid-template-columns: 7.2rem 7.2rem;
  }
  .backend,
  .other,
  .frontend {
    row-gap: 2.4rem;
    column-gap: 1rem;
  }

  .skill-container {
    column-gap: 4.8em;
  }
  .other {
    grid-template-columns: 7.2rem 7.2rem;
  }
  .skills-section {
    grid-template-rows: 0.5fr 1fr 0.2fr;
  }
}
</style>
