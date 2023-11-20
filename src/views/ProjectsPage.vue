<template>
  <section class="projects-section">
    <base-background></base-background>
    <div class="projects-title-container">
      <div class="rectangle" v-if="show"></div>
      <h2>Projects</h2>
    </div>
    <h4>
      Disclaimer: most of the projects' backend servers are hosted <br />
      via 3rd party services, so it might take a while <br />
      for the websites to load all the data
    </h4>
    <base-card>
      <template #image>
        <img
          class="power-tower"
          src="../assets/crypto-app.webp"
          alt="Image of the contacts system app"
        />
      </template>
      <template #content>
        <p>
          A fullstack app displaying cryptocurrency graphs and info in realtime. Full description on
          GitHub.
        </p>
      </template>
      <template #logos>
        <img src="../assets/react-js-icon.svg" class="skill-icon" />
        <img src="../assets/expressjs_logo_icon_169185.svg" class="skill-icon" />
        <img src="../assets/bootstrap.svg" class="skill-icon" />
        <img src="../assets/sass.svg" class="skill-icon" />
        <img src="../assets/chartjs-logos.svg" class="skill-icon" />
      </template>
      <template #button-1>
        <a href="https://crypto-check-site.netlify.app" target="_blank">
          <base-button>Visit site</base-button>
        </a>
      </template>
      <template #button-2>
        <a href="https://github.com/JuozasPetryla/crypto-site" target="_blank"
          ><base-button>Project GitHub</base-button></a
        >
      </template>
    </base-card>
    <base-card>
      <template #image>
        <img
          class="power-tower"
          src="../assets/contactsystem.webp"
          alt="Image of the contacts system app"
        />
      </template>
      <template #content>
        <p>
          A complicated contacts management system for Teltonika. Login for testing -> mail:
          admin@gmail.com; password: adminadmin.
        </p>
      </template>
      <template #logos>
        <img src="../assets/vue-9.svg" class="skill-icon" />
        <img src="../assets/file_type_tailwind_icon_130128.svg" class="skill-icon" />
        <img src="../assets/pocketbase-seeklogo.com.svg" class="skill-icon" />
      </template>
      <template #button-1
        ><a href="https://contacts-system.netlify.app/" target="_blank"
          ><base-button>Visit site</base-button></a
        ></template
      >
      <template #button-2
        ><a href="https://github.com/JuozasPetryla/contacts-system" target="_blank"
          ><base-button>Project GitHub</base-button></a
        ></template
      >
    </base-card>
    <base-card>
      <template #image>
        <img
          class="power-tower"
          src="../assets/PostApplication.webp"
          alt="Image of the post application app"
        />
      </template>
      <template #content>
        <p>
          A full-stack app for posting posts, unit tested and documented. Full description on
          GitHub.
        </p>
      </template>
      <template #logos>
        <img src="../assets/vue-9.svg" class="skill-icon" />
        <img src="../assets/css-3.svg" class="skill-icon" />
        <img src="../assets/expressjs_logo_icon_169185.svg" class="skill-icon" />
        <img src="../assets/socket-io-icon.svg" class="skill-icon" />
      </template>
      <template #button-1>
        <a href="https://post-application-full.netlify.app" target="_blank">
          <base-button>Visit site</base-button>
        </a>
      </template>
      <template #button-2
        ><a href="https://github.com/JuozasPetryla/post-application-fullstack-full" target="_blank"
          ><base-button>Project GitHub</base-button></a
        ></template
      >
    </base-card>
    <base-card>
      <template #image>
        <img
          class="power-tower"
          src="../assets/PowerTowerImage.webp"
          alt="Image of a fake gym landing page"
        />
      </template>
      <template #content>
        <p>A fictional powerlifting gym landing page.</p>
      </template>
      <template #logos>
        <img src="../assets/html-1.svg" class="skill-icon" />
        <img src="../assets/css-3.svg" class="skill-icon" />
        <img src="../assets/logo-javascript.svg" class="skill-icon" />
      </template>
      <template #button-1
        ><a href="https://powertower.netlify.app/" target="_blank"
          ><base-button>Visit site</base-button></a
        >
      </template>
      <template #button-2
        ><a href="https://github.com/JuozasPetryla/landing-page" target="_blank"
          ><base-button>Project GitHub</base-button></a
        ></template
      >
    </base-card>
  </section>
</template>

<script>
import { ref } from 'vue'
import useAnimation from '../mixins/animation'
export default {
  setup() {
    const postRef = ref(false)
    const show = useAnimation()
    return { show, postRef }
  }
}
</script>

<style scoped>
.projects-section {
  height: 105%;
  width: 100%;
  background: #333533;
  display: grid;
  justify-items: center;
  justify-content: center;
  grid-template-rows: 1fr 0.5fr 2fr 2fr;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 9.6rem;
  row-gap: 9.6rem;
  position: relative;
}
.projects-title-container {
  margin-top: 2.4rem;
  position: relative;
  grid-column: 1/-1;
}

h4 {
  grid-column: 1/-1;
  font-size: 2rem;
  text-align: center;
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

@media (max-width: 1550px) {
  .projects-section {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr 2fr 2fr 2fr 2fr;
    row-gap: 4.2rem;
  }
}

@media (max-width: 992px) {
  .projects-title-container h2 {
    font-size: 9.6rem;
  }
  .rectangle {
    height: 12rem;
  }
  .skill-icon {
    width: 4.8rem;
    height: 4.8rem;
  }
}
@media (max-width: 768px) {
  .projects-title-container h2 {
    font-size: 8rem;
  }
  .rectangle {
    height: 10rem;
  }
  .skill-icon {
    width: 3.2rem;
    height: 3.2rem;
  }
}
@media (max-width: 660px) {
  .projects-title-container h2 {
    font-size: 6.4rem;
  }

  .projects-section {
    gap: 3.2rem;
  }
  .rectangle {
    border-left: 7px solid #40916c;
    height: 8rem;
  }
}
@media (max-width: 480px) {
  .projects-title-container h2 {
    font-size: 4.8rem;
  }
  h4 {
    font-size: 1.2rem;
  }

  .projects-section {
    gap: 2rem;
  }
  .rectangle {
    border-left: 5px solid #40916c;
    height: 6rem;
  }
  .skill-icon {
    width: 2.4rem;
    height: 2.4rem;
  }
}
@media (max-width: 350px) {
  .projects-title-container h2 {
    font-size: 3.2rem;
  }

  .projects-section {
    gap: 1rem;
  }
  .rectangle {
    border-left: 4px solid #40916c;
    height: 4.5rem;
  }
  .skill-icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
