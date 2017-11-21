import Api from '@/services/Api'

export default {
  getPathology (params) {
    return Api().get('pathologies/' + params.id)
  },
  fetchPathologies () {
    return Api().get('pathologies')
  },
  addPathology (params) {
    return Api().post('pathologies', params)
  },
  updatePathology (params) {
    return Api().put('pathologies/' + params.id, params)
  },
  deletePathology (id) {
    return Api().delete('pathologies/' + id)
  }
}
