import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'
import VCalendar from 'v-calendar';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue'

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});





Vue.config.productionTip = false

//add ant design
Vue.use(Antd);

Vue.use(VueRouter)
// Install BootstrapVue
Vue.use(BootstrapVue)
// BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

