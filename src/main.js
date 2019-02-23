import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router'
import LoginApp from './login.vue'
import Dashboard from './Dashboard.vue'
import moment from 'moment'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import persistentState from 'vue-persistent-state';

let initialState = {
  user: {
      name: 'Аноним',
      identities: []
  }  // will get value from localStorage if found there
};
Vue.use(persistentState, initialState);

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm:ss')
    }
});

let instance = {user: {
  name: 'Аноним',
  identities: []
}};

const routes = [
    {
        path: '/login',
        component: LoginApp,
        props: {instanceA: instance},
    },
    {
        path: '/',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (localStorage.user && JSON.parse(localStorage.user)['identities'].includes('view_dashboard')) {
                this.user = JSON.parse(localStorage.user);
                next();
            } else {
                next('/login');
            }

        }
    }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
    render(createElement) {
    return createElement(App, {
      props: {
        instanceA: instance
      }
    })
  }
});
