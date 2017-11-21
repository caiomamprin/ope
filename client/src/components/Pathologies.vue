<template>
  <div id="pathologies">
    <h1>Patologias</h1>
    <div v-if="pathologies.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPathology' }">Cadastrar Patologia</router-link>
      </div>
      <table>
        <tr>
          <td>id</td>
          <td>cid</td>
          <td>description</td>
          <td>status</td>
          <td>ações</td>
        </tr>
        <tr v-for="pathology in pathologies">
          <td>{{ pathology._id }}</td>
          <td>{{ pathology.cid }}</td>
          <td>{{ pathology.description }}</td>
          <td>{{ pathology.status ? 'Ativo' : 'Inativo' }}</td>
          <td>
            <router-link v-bind:to="{ name: 'EditPathology', params: { id: pathology._id } }">Alterar</router-link> |
            <a href="#" @click="deletePathology(pathology._id)">Excluir</a>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      Não há Patologias cadastrados<br /><br />
      <router-link v-bind:to="{ name: 'NewPatient' }" class="btn">Cadastrar Patologia</router-link>
    </div>
  </div>
</template>

<script>
import PathologiesService from '@/services/PathologiesService.js'

export default {
  name: 'Pathologies',
  data () {
    return {
      pathologies: []
    }
  },
  mounted () {
    this.getPathologies()
  },
  methods: {
    async getPathologies () {
      const response = await PathologiesService.fetchPathologies()
      this.pathologies = response.data.pathologies
    },
    async deletePathology (id) {
      const $this = this
      $this.$swal({
        title: 'Tem certeza?',
        text: 'Você não será capaz de reverter essa ação!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sim, excluir'
      }).then(() => {
        PathologiesService.deletePathology(id)
        $this.$router.go({
          path: '/pathologies'
        })
      })
    }
  }
}
</script>

<style>
.table-wrap {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.table-wrap table {
  margin: 0 auto;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
