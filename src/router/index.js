import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import Home from './../views/Home.vue';
import About from './../views/About.vue'

const routes = [
    { 
      path: '/', 
      component: Home
    },
    {
      path: '/movie/:id',
      component: About
    }
]

  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
export default new Router({
    routes // short for `routes: routes`
})