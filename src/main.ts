import "./index.scss";
import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router"
import "./lib/cot.scss";

const app = createApp(App)
app.use(router)
app.mount('#app')
