import Api from '@/services/Api'

export default {
  getDoctor (params) {
    return Api().get('doctors/' + params.id)
  },
  fetchDoctors () {
    return Api().get('doctors')
  },
  addDoctor (params) {
    return Api().post('doctors', params)
  },
  updateDoctor (params) {
    return Api().put('doctors/' + params.id, params)
  },
  deleteDoctor (id) {
    return Api().delete('doctors/' + id)
  }
}
