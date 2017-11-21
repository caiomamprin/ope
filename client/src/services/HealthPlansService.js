import Api from '@/services/Api'

export default {
  getHealthPlan (params) {
    return Api().get('healthplans/' + params.id)
  },
  fetchHealthPlans () {
    return Api().get('healthplans')
  },
  addHealthPlan (params) {
    return Api().post('healthplans', params)
  },
  updateHealthPlan (params) {
    return Api().put('healthplans/' + params.id, params)
  },
  deleteHealthPlan (id) {
    return Api().delete('healthplans/' + id)
  }
}
