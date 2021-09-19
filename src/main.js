import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router";
import Vuetify from "vuetify";

Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
