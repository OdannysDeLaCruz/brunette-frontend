import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Icons
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCircleNotch)

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
