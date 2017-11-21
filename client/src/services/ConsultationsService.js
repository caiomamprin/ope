import Api from '@/services/Api'

export default {
  getConsultation (params) {
    return Api().get('consultations/' + params.id)
  },
  fetchConsultations () {
    return Api().get('consultations')
  },
  addConsultation (params) {
    return Api().post('consultations', params)
  },
  updateConsultation (params) {
    return Api().put('consultations/' + params.id, params)
  },
  deleteConsultation (id) {
    return Api().delete('consultations/' + id)
  }
}
