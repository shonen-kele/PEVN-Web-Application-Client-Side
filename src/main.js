import { createApp } from "vue"
import App from "./App.vue"
import {router} from "./router/index.js"
import {createVuetify} from "vuetify"
import 'vuetify/dist/vuetify.min.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives
})
const app = createApp(App)
app.use(router).use(vuetify)
app.mount("#app")