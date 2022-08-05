import { createApp } from 'vue'
import { createPinia } from 'pinia'

// plugins
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// plugins
app.use(VueGoogleMaps, {
    load: {
        key: '',
    },
    autobindAllEvents: true,
})
app.mount('#app')
