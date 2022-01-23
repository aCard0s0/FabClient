import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faSearch, faExclamationCircle,
    faEnvelope,
    faSnowflake, faStar, faSyncAlt,
    faFilter, faEraser, faBars
} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faExclamationCircle)
library.add(faEnvelope)
library.add(faSnowflake)
library.add(faStar)
library.add(faSyncAlt)
library.add(faFilter)
library.add(faEraser)
library.add(faBars)

createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(BootstrapVue3)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
