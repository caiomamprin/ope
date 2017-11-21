<template>
  <div class="patients">
    <h1>Alterar Paciente</h1>
    <div class="form">
      <div>
        <input type="text" name="name" placeholder="Fulano de Tal" v-model="patient.name">
      </div>
      <div>
        <input type="text" name="cpf" placeholder="450.265.978-90" v-model="patient.cpf">
      </div>
      <div>
        <input type="string" name="birthDate" placeholder="21/01/1941" v-model="patient.birthDate">
      </div>
      <div>
        <select v-model="patient.healthplan">
          <option value="" selected>Selecione o convenio do Paciente</option>
          <option v-for="healthplan in healthplans" :value="healthplan._id">{{ healthplan.businessName }}</option>
        </select>
      </div>
      <div>
        <label for="status">Status</label><br>
        <input id="status" type="checkbox" name="status" v-model="patient.status">
      </div>
       <div>
        <button type="submit" class="btn" @click="updatePatient">Atualizar Paciente</button>
      </div>
    </div>
  </div>
</template>

<script>
import HealthPlansService from '@/services/HealthPlansService.js'
import PatientsService from '@/services/PatientsService.js'

export default {
  name: 'NewPatient',
  data () {
    return {
      healthplans: [],
      patient: {
        name: '',
        cpf: '',
        birthDate: '',
        status: '',
        healthplan: ''
      }
    }
  },
  mounted () {
    this.getPatient()
    this.getHealthPlans()
  },
  methods: {
    async getPatient () {
      const response = await PatientsService.getPatient({
        id: this.$route.params.id
      })
      this.patient.name = response.data.name
      this.patient.cpf = response.data.cpf
      this.patient.birthDate = response.data.birthDate
      this.patient.healthplan = response.data.healthplan
      this.patient.status = response.data.status
    },
    async getHealthPlans () {
      const response = await HealthPlansService.fetchHealthPlans()
      this.healthplans = response.data.healthplans
    },
    async updatePatient () {
      await PatientsService.updatePatient({
        id: this.$route.params.id,
        name: this.patient.name,
        cpf: this.patient.cpf,
        birthDate: this.patient.birthDate,
        healthplan: this.patient.healthplan,
        status: this.patient.status
      })
      this.$router.push({ name: 'Patients' })
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
