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
          <template #logo><p>Vue</p></template>
          <img src="../../assets/vue-9.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>React</p></template>
          <img src="../../assets/react-js-icon.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Tailwind</p></template>
          <img src="../../assets/file_type_tailwind_icon_130128.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Bootstrap</p></template>
          <img src="../../assets/bootstrap.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>SASS</p></template>
          <img src="../../assets/sass.svg" class="skill-icon" />
        </skill-icons>
      </div>
      <div class="backend">
        <h4>Back-end</h4>
        <skill-icons>
          <template #logo><p>Express.js</p></template>
          <img src="../../assets/expressjs_logo_icon_169185.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Spring</p></template>
          <img src="../../assets/spring-svgrepo-com.svg" class="skill-icon socket" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>SQL</p></template>
          <img src="../../assets/sql-database-generic-svgrepo-com.svg" class="skill-icon" />
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
          <template #logo><p>Docker</p></template>
          <img src="../../assets/docker-svgrepo-com.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>AGILE</p></template>
          <img src="../../assets/agile-svgrepo-com.svg" class="skill-icon" />
        </skill-icons>
      </div>
      <div class="languages">
        <h4>Languages</h4>
        <skill-icons>
          <template #logo><p>JavaScript</p></template>
          <img src="../../assets/logo-javascript.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>TypeScript</p></template>
          <img src="../../assets/typescript-svgrepo-com.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>C#</p></template>
          <img src="../../assets/c--4.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Lua</p></template>
          <img src="../../assets/lua-svgrepo-com.svg" class="skill-icon" />
        </skill-icons>
        <skill-icons>
          <template #logo><p>Java</p></template>
          <img src="../../assets/java-svgrepo-com.svg" class="skill-icon" />
        </skill-icons>
      </div>
    </div>
    <div class="download-buttons">
      <base-button class="cv-button"
        ><a
          href="https://drive.google.com/file/d/1CacUNehK8W1T8FFjpdNdoXf29-6QhVPE/view?usp=sharing"
          download
          target="_blank"
          >Download CV</a
        ></base-button
      >
      <base-button class="cv-button"
        ><a
          href="https://drive.google.com/file/d/1jYDsQXWcuuryCf3fq5bNmIhdUgj5JLOT/view?usp=sharing"
          download
          target="_blank"
          >Atsisiųsti CV</a
        ></base-button
      >
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
  grid-template-rows: 1fr 2fr 0.5fr;
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

.download-buttons {
  margin-top: 2.4rem;
  display: flex;
  gap: 2.4rem;
}

.backend,
.other,
.frontend,
.languages {
  display: grid;
  place-items: center;
  row-gap: 5.6rem;
  column-gap: 2.8rem;
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

.languages {
  grid-template-columns: 12rem 12rem 12rem 12rem 12rem;
  grid-column: 1/-1;
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
  padding: 0 1rem;
}
.skill-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 8em;
  height: 27.5rem;
  place-items: center;
  align-items: start;
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
  .languages {
    grid-template-columns: 10rem 10rem 10rem 10rem 10rem;
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
  .languages {
    grid-template-columns: 8rem 8rem 8rem 8rem 8rem;
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
@media (max-width: 768px) {
  .skills-section h3 {
    font-size: 4.8rem;
    width: 55rem;
  }
  .languages {
    grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
  }
  h4 {
    font-size: 3rem;
  }
  .skill-icon {
    width: 4em;
    height: 4em;
  }
  .frontend {
    grid-template-columns: 4.8rem 4.8rem 4.8rem;
  }

  .backend {
    grid-template-columns: 5.2rem 5.2rem;
  }
  .backend,
  .other,
  .frontend {
    row-gap: 2.2rem;
    column-gap: 1rem;
  }

  .skill-container {
    height: 22.5rem;
    column-gap: 3.2em;
  }
  .other {
    grid-template-columns: 5.2rem 5.2rem;
  }
  .skills-section {
    grid-template-rows: 0.3fr 1fr 0.1fr;
  }

  .cv-button {
    margin-bottom: 4.8rem;
  }
}

@media (max-width: 580px) {
  .skills-section h3 {
    font-size: 3.2rem;
    width: 40rem;
    text-shadow: 4px 4px #52b788;
  }
  h4 {
    text-shadow: 2.5px 2.5px #52b788;

    font-size: 2rem;
  }
  .languages {
    grid-template-columns: 4rem 4rem 4rem 4rem 4rem;
  }
  .skill-icon {
    width: 3.2em;
    height: 3.2em;
  }
  .frontend {
    grid-template-columns: 4rem 4rem 4rem;
  }

  .backend {
    grid-template-columns: 4.8rem 4.8rem;
  }
  .backend,
  .other,
  .frontend {
    row-gap: 2.2rem;
    column-gap: 1rem;
  }

  .skill-container {
    height: 18rem;
    column-gap: 3em;
  }
  .other {
    grid-template-columns: 4.8rem 4.8rem;
  }
  .skills-section {
    grid-template-rows: 0.2fr 0.6fr 0.1fr;
  }

  .cv-button {
    margin-bottom: 3.2rem;
  }
}
@media (max-width: 480px) {
  .skills-section h3 {
    font-size: 2.4rem;
    width: 33.5rem;
    text-shadow: 3px 3px #52b788;
  }
  h4 {
    text-shadow: 2px 2px #52b788;

    font-size: 1.6rem;
  }
  .skill-icon {
    width: 3.2em;
    height: 3.2em;
  }
  .frontend {
    grid-template-columns: 3.2rem 3.2rem 3.2rem;
  }

  .backend {
    grid-template-columns: 3.6rem 3.6rem;
  }
  .backend,
  .other,
  .frontend {
    row-gap: 1.6rem;
    column-gap: 1rem;
  }

  .skill-container {
    height: 15rem;
    column-gap: 3em;
  }
  .other {
    grid-template-columns: 3.6rem 3.6rem;
  }
  .skills-section {
    grid-template-rows: 0.2fr 0.6fr 0.1fr;
  }

  .cv-button {
    margin-bottom: 2.4rem;
  }
}
@media (max-width: 350px) {
  .skills-section h3 {
    font-size: 2rem;
    width: 25rem;
    text-shadow: 2px 2px #52b788;
  }
  h4 {
    text-shadow: 1px 1px #52b788;

    font-size: 1.2rem;
  }
  .languages {
    grid-template-columns: 2.4rem 2.4rem 2.4rem 2.4rem 2.4rem;
  }
  .skill-icon {
    width: 2.4em;
    height: 2.4em;
  }
  .frontend {
    grid-template-columns: 2.4rem 2.4rem 2.4rem;
  }

  .backend {
    grid-template-columns: 3rem 3rem;
  }
  .backend,
  .other,
  .frontend {
    row-gap: 1.2rem;
    column-gap: 0.4rem;
  }

  .skill-container {
    height: 12rem;
    column-gap: 3em;
  }
  .other {
    grid-template-columns: 3rem 3rem;
  }
  .skills-section {
    grid-template-rows: 0.2fr 0.5fr 0.1fr;
  }

  .cv-button {
    margin-bottom: 1.2rem;
  }
}
</style>
