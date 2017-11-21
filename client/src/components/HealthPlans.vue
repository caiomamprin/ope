<template>
  <div id="healthplans">
    <h1>Convênios</h1>
    <div v-if="healthplans.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewHealthPlan' }">Cadastrar Convênio</router-link>
      </div>
      <table>
        <tr>
          <td>id</td>
          <td>razão social</td>
          <td>cpnj</td>
          <td>valor da consulta</td>
          <td>status</td>
          <td>ações</td>
        </tr>
        <tr v-for="healthplan in healthplans">
          <td>{{ healthplan._id }}</td>
          <td>{{ healthplan.businessName }}</td>
          <td>{{ healthplan.cnpj }}</td>
          <td>{{ healthplan.consultationFee }}</td>
          <td>{{ healthplan.status ? 'Ativo' : 'Inativo' }}</td>
          <td>
            <router-link v-bind:to="{ name: 'EditHealthPlan', params: { id: healthplan._id } }">Alterar</router-link> |
            <a href="#" @click="deleteHealthPlan(healthplan._id)">Excluir</a>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      Não há convênios cadastrados<br /><br />
      <router-link v-bind:to="{ name: 'NewHealthPlan' }" class="btn">Cadastrar Convênio</router-link>
    </div>
  </div>
</template>

<script>
import HealthPlansService from '@/services/HealthPlansService.js'

export default {
  name: 'HealthPlans',
  data () {
    return {
      healthplans: []
    }
  },
  mounted () {
    this.getHealthPlans()
  },
  methods: {
    async getHealthPlans () {
      const response = await HealthPlansService.fetchHealthPlans()
      this.healthplans = response.data.healthplans
    },
    async deleteHealthPlan (id) {
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
        HealthPlansService.deleteHealthPlan(id)
        $this.$router.go({
          path: '/healthplans'
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
