/* eslint-disable */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(VueApexCharts);
app.use(PerfectScrollbar)
app.mount('#app')