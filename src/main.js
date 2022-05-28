/* eslint-disable */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/index.scss'
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import directives from "./directives/";
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(VueApexCharts);
app.use(PerfectScrollbar);
directives(app);
app.mount('#app')