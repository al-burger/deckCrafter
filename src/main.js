import Vue from 'vue'
import App from './App.vue'
import 'es6-promise/auto'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
//sidebar
Vue.use(VueSidebarMenu)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
