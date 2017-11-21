import Api from '@/services/Api'

export default {
  getPatient (params) {
    return Api().get('patients/' + params.id)
  },
  fetchPatients () {
    return Api().get('patients')
  },
  addPatient (params) {
    return Api().post('patients', params)
  },
  updatePatient (params) {
    return Api().put('patients/' + params.id, params)
  },
  deletePatient (id) {
    return Api().delete('patients/' + id)
  }
}
