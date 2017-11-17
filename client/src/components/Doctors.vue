<template>
  <div id="doctors">
    <h1>Doutores(as)</h1>
    <div v-if="doctors.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewDoctor' }">Salvar</router-link>
      </div>
      <table>
        <tr>
          <td>id</td>
          <td>nome</td>
          <td>email</td>
          <td>crfa</td>
          <td>status</td>
          <td>ações</td>
        </tr>
        <tr v-for="doctor in doctors">
          <td>{{ doctor._id }}</td>
          <td>{{ doctor.name }}</td>
          <td>{{ doctor.email }}</td>
          <td>{{ doctor.crfa }}</td>
          <td>{{ doctor.status ? 'Ativo' : 'Inativo' }}</td>
          <td>
            <router-link v-bind:to="{ name: 'EditDoctor', params: { id: doctor._id } }">Alterar</router-link> |
            <a href="#">Excluir</a>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      Não há doutoras cadastradas<br /><br />
      <router-link v-bind:to="{ name: 'NewDoctor' }" class="btn">Cadastrar Doutora</router-link>
    </div>
  </div>
</template>

<script>
import DoctorsService from '@/services/DoctorsService.js'

export default {
  name: 'doctors',
  data () {
    return {
      doctors: []
    }
  },
  mounted () {
    this.getDoctors()
  },
  methods: {
    async getDoctors () {
      const response = await DoctorsService.fetchDoctors()
      this.doctors = response.data.doctors
    }
  }
}
</script>

<style>
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
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
