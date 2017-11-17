import Vue from 'vue'
import Router from 'vue-router'
import Doctors from '@/components/Doctors'
import NewDoctor from '@/components/NewDoctor'
import EditDoctor from '@/components/EditDoctor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/doctors'
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
    },
    {
      path: '/doctors/:id',
      name: 'EditDoctor',
      component: EditDoctor
    }
  ]
})
