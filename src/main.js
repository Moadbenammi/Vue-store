import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './api/config'
import store from './vuex/vuex'

createApp(App).use(router).use(store).mount('#app');
