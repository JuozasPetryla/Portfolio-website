<template>
  <div class="skills-section">
    <h3>My skills</h3>
    <div class="skill-container">
      <div class="frontend">
        <h4>Front-end</h4>
        <skill-icons>
          <template #logo><p>HTML</p></template>
          <img src="../../assets/html-1.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>CSS</p></template>
          <img src="../../assets/css-3.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>JavaScript</p></template>
          <img src="../../assets/logo-javascript.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Vue</p></template>
          <img src="../../assets/vue-9.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Tailwind</p></template>
          <img src="../../assets/file_type_tailwind_icon_130128.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Vite</p></template>
          <img src="../../assets/vite-svgrepo-com.svg" />
        </skill-icons>
      </div>
      <div class="backend">
        <h4>Back-end</h4>
        <skill-icons>
          <template #logo><p>Express.js</p></template>
          <div class="express">
            <img src="../../assets/expressjs_logo_icon_169185.svg" />
          </div>
        </skill-icons>
        <skill-icons>
          <template #logo><p>Socket.io</p></template>
          <img class="socket" src="../../assets/socketio-icon.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>SQLite</p></template>
          <img src="../../assets/sqlite_logo_icon_169724.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Postman</p></template>
          <img src="../../assets/postman-icon-svgrepo-com.svg" />
        </skill-icons>
      </div>
      <div class="other">
        <h4>Other</h4>
        <skill-icons>
          <template #logo><p>Git</p></template>
          <img src="../../assets/git-icon.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Gitlab</p></template>
          <img src="../../assets/gitlab-seeklogo.com.svg" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Github</p></template>
          <img src="../../assets/github.svg" />
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
  grid-template-rows: 1fr 3fr 1fr;
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

.backend,
.other,
.frontend {
  display: grid;
  place-items: center;
  row-gap: 5.6rem;
  column-gap: 3.2rem;
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
  column-gap: 10em;
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
.express {
  width: 10.4em;
  height: 10.4em;
  display: grid;
  place-items: center;
  background-color: #dee2e6;
  border-radius: 40px;
}
.socket {
  width: 10.4em;
  height: 10.4em;
  background-color: #dee2e6;
  border-radius: 100px;
  padding: 2rem;
}
</style>
