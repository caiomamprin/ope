<template>
  <div class="consultations">
    <h1>Cadastrar Consulta</h1>
    <div class="form">
      <div>
        <input type="text" name="consultationType" placeholder="Avaliar Fonética" v-model="consultationType">
      </div>
      <div>
        <input type="text" name="privateConsultationFee" placeholder="49.90" v-model="privateConsultationFee">
      </div>
      <div>
        <label for="status">Status</label><br>
        <input id="status" type="checkbox" name="status" v-model="status">
      </div>
       <div>
        <button type="submit" class="btn" @click="addConsultation">Cadastrar Consulta</button>
      </div>
    </div>
  </div>
</template>

<script>
import ConsultationsService from '@/services/ConsultationsService.js'

export default {
  name: 'NewConsultation',
  data () {
    return {
      consultationType: '',
      privateConsultationFee: '',
      status: ''
    }
  },
  methods: {
    async addConsultation () {
      await ConsultationsService.addConsultation({
        consultationType: this.consultationType,
        privateConsultationFee: this.privateConsultationFee,
        status: this.status
      })

      this.$router.push({ name: 'Consultations' })
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
