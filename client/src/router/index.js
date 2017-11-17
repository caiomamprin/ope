import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Doctors from '@/components/Doctors'
import NewDoctor from '@/components/NewDoctor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/doctors',
      name: 'Doctors',
      component: Doctors
    },
    {
      path: '/doctors/new',
      name: 'NewDoctor',
      component: NewDoctor
    }
  ]
})
