<template>
  <div id="consultations">
    <h1>Consultas</h1>
    <div v-if="consultations.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewConsultation' }">Cadastrar Consulta</router-link>
      </div>
      <table>
        <tr>
          <td>id</td>
          <td>tipo de consulta</td>
          <td>valor da consulta particular</td>
          <td>status</td>
          <td>ações</td>
        </tr>
        <tr v-for="consultation in consultations">
          <td>{{ consultation._id }}</td>
          <td>{{ consultation.consultationType }}</td>
          <td>{{ consultation.privateConsultationFee }}</td>
          <td>{{ consultation.status ? 'Ativo' : 'Inativo' }}</td>
          <td>
            <router-link v-bind:to="{ name: 'EditConsultation', params: { id: consultation._id } }">Alterar</router-link> |
            <a href="#" @click="deleteConsultation(consultation._id)">Excluir</a>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      Não há consultas cadastradas<br /><br />
      <router-link v-bind:to="{ name: 'NewConsultation' }" class="btn">Cadastrar Consulta</router-link>
    </div>
  </div>
</template>

<script>
import ConsultationsService from '@/services/ConsultationsService.js'

export default {
  name: 'Consultations',
  data () {
    return {
      consultations: []
    }
  },
  mounted () {
    this.getConsultations()
  },
  methods: {
    async getConsultations () {
      const response = await ConsultationsService.fetchConsultations()
      this.consultations = response.data.consultations
    },
    async deleteConsultation (id) {
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
        ConsultationsService.deleteConsultation(id)
        $this.$router.go('consultations')
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
