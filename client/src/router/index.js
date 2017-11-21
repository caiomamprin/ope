import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Doctors from '@/components/Doctors'
import NewDoctor from '@/components/NewDoctor'
import EditDoctor from '@/components/EditDoctor'
import HealthPlans from '@/components/HealthPlans'
import NewHealthPlan from '@/components/NewHealthPlan'
import EditHealthPlan from '@/components/EditHealthPlan'
import Patients from '@/components/Patients'
import NewPatient from '@/components/NewPatient'
import EditPatient from '@/components/EditPatient'
import Pathologies from '@/components/Pathologies'
import NewPathology from '@/components/NewPathology'
import EditPathology from '@/components/EditPathology'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/healthplans',
      name: 'HealthPlans',
      component: HealthPlans
    },
    {
      path: '/healthplans/new',
      name: 'NewHealthPlan',
      component: NewHealthPlan
    },
    {
      path: '/healthplans/:id',
      name: 'EditHealthPlan',
      component: EditHealthPlan
    },
    {
      path: '/patients',
      name: 'Patients',
      component: Patients
    },
    {
      path: '/patients/new',
      name: 'NewPatient',
      component: NewPatient
    },
    {
      path: '/patients/:id',
      name: 'EditPatient',
      component: EditPatient
    },
    {
      path: '/pathologies',
      name: 'Pathologies',
      component: Pathologies
    },
    {
      path: '/pathologies/new',
      name: 'NewPathology',
      component: NewPathology
    },
    {
      path: '/pathologies/:id',
      name: 'EditPathology',
      component: EditPathology
    }
  ]
})
