import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Booking from '@/components/Booking'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: 'booking/',
      name: 'Booking',
      component: Booking
    },

  ]
})
