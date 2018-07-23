import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../cart'
import Address from '../address'
Vue.use(VueRouter)















export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Cart
    },
    {
      path:"/address",
      component: Address
    }
  ]
})
