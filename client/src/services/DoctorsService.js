import Api from '@/services/Api'

export default {
  fetchDoctors () {
    return Api().get('doctors')
  },
  addDoctor (params) {
    return Api().post('doctors', params)
  }
}
