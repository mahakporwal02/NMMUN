import Vue from 'vue'
import Router from 'vue-router';
// const {google} = require('googleapis')
import App from './App.vue'
import Home from './components/Home.vue';
import Register from './components/Register.vue';



Vue.use(Router);
// Vue.use(google);

Vue.config.productionTip = false
const BASE_TITLE = 'NMMUN';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: () => BASE_TITLE }
  },
  {
    path: '/register',
    component: Register,
    meta: { title: () => BASE_TITLE }
  },
];

const router = new Router({
  routes,
  mode : 'history'
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')