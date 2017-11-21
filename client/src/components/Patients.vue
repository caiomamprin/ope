<template>
  <div id="patients">
    <h1>Pacientes</h1>
    <div v-if="patients.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewPatient' }">Cadastrar Paciente</router-link>
      </div>
      <table>
        <tr>
          <td>id</td>
          <td>nome</td>
          <td>cpf</td>
          <td>data de nascimento</td>
          <td>convênio</td>
          <td>status</td>
          <td>ações</td>
        </tr>
        <tr v-for="patient in patients">
          <td>{{ patient._id }}</td>
          <td>{{ patient.name }}</td>
          <td>{{ patient.cpf }}</td>
          <td>{{ patient.birthDate }}</td>
          <td>{{ patient.healthplan }}</td>
          <td>{{ patient.status ? 'Ativo' : 'Inativo' }}</td>
          <td>
            <router-link v-bind:to="{ name: 'EditPatient', params: { id: patient._id } }">Alterar</router-link> |
            <a href="#" @click="deletePatient(patient._id)">Excluir</a>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      Não há patologias cadastrados<br /><br />
      <router-link v-bind:to="{ name: 'NewPatient' }" class="btn">Cadastrar Paciente</router-link>
    </div>
  </div>
</template>

<script>
import PatientsService from '@/services/PatientsService.js'

export default {
  name: 'Patients',
  data () {
    return {
      patients: []
    }
  },
  mounted () {
    this.getPatients()
    this.getHealthPlan()
  },
  methods: {
    async getPatients () {
      const response = await PatientsService.fetchPatients()
      this.patients = response.data.patients
    },
    getHealthPlan (id) {
      console.log(id)
    },
    async deletePatient (id) {
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
        PatientsService.deletePatient(id)
        $this.$router.go({
          path: '/patients'
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
