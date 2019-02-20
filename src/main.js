import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import LoginApp from './login.vue'
import Dashboard from './Dashboard.vue'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
  { path: '/login', component: LoginApp },
  { path: '/', component: Dashboard }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
