import App from "./App.vue"
import {createApp} from "vue"
import  {vuetify} from "./plugins/vuetify.js"

const app = createApp(App)
app.use(vuetify)
app.mount("#app")