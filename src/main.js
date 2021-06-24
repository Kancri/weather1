import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import router from './router'
Vue.use(router)

import './css/index.css'
import './css/reset.css'
import './css/music.css'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')