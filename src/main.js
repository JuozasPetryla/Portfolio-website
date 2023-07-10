import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'

import BaseButton from './components/UI/BaseButton.vue'
import BaseTooltip from './components/UI/BaseTooltip.vue'
const app = createApp(App)

app.component('base-tooltip', BaseTooltip)
app.component('base-button', BaseButton)

app.use(router)

app.mount('#app')
