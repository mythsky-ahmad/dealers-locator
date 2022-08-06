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
        key: 'AIzaSyDCRQX8mkb1dhYEk98us7k2NM7sUKk_OiI',
        libraries: "places"
    },
    // autobindAllEvents: true,

})
app.mount('#app')
