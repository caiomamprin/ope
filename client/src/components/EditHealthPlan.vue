<template>
  <div class="healthplans">
    <h1>Alterar Convênio</h1>
    <div class="form">
      <div>
        <input type="text" name="businessName" placeholder="Razão Social" v-model="businessName">
      </div>
      <div>
        <input type="text" name="cnpj" placeholder="20.410.156/0001-58" v-model="cnpj">
      </div>
      <div>
        <input type="string" name="consultationFee" placeholder="99.99" v-model="consultationFee">
      </div>
      <div>
        <label for="status">Status</label><br>
        <input id="status" type="checkbox" name="status" v-model="status">
      </div>
       <div>
        <button type="submit" class="btn" @click="updateHealthPlan">Atualizar Convênio</button>
      </div>
    </div>
  </div>
</template>

<script>
import HealthPlansService from '@/services/HealthPlansService.js'

export default {
  name: 'EditHealthPlan',
  data () {
    return {
      businessName: '',
      cnpj: '',
      consultationFee: '',
      status: 1
    }
  },
  mounted () {
    this.getHealthPlan()
  },
  methods: {
    async getHealthPlan () {
      const response = await HealthPlansService.getHealthPlan({
        id: this.$route.params.id
      })
      this.businessName = response.data.businessName
      this.cnpj = response.data.cnpj
      this.consultationFee = response.data.consultationFee
      this.status = response.data.status
    },
    async updateHealthPlan () {
      await HealthPlansService.updateHealthPlan({
        id: this.$route.params.id,
        businessName: this.businessName,
        cnpj: this.cnpj,
        consultationFee: this.consultationFee,
        status: this.status
      })
      this.$router.push({ name: 'HealthPlans' })
    }
  }
}
</script>

<style>
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
