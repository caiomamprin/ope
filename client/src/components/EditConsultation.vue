<template>
  <div class="consultations">
    <h1>Alterar Consulta</h1>
    <div class="form">
      <div>
        <input type="text" name="consultationType" placeholder="Avaliação Fonética" v-model="consultationType">
      </div>
      <div>
        <input type="text" name="privateConsultationFee" placeholder="19.90" v-model="privateConsultationFee">
      </div>
      <div>
        <label for="status">Status</label><br>
        <input id="status" type="checkbox" name="status" v-model="status">
      </div>
       <div>
        <button type="submit" class="btn" @click="updateConsultation">Atualizar Consulta</button>
      </div>
    </div>
  </div>
</template>

<script>
import ConsultationsService from '@/services/ConsultationsService.js'

export default {
  name: 'EditConsultation',
  data () {
    return {
      consultationType: '',
      privateConsultationFee: '',
      status: 1
    }
  },
  mounted () {
    this.getConsultation()
  },
  methods: {
    async getConsultation () {
      const response = await ConsultationsService.getConsultation({
        id: this.$route.params.id
      })
      this.consultationType = response.data.consultationType
      this.privateConsultationFee = response.data.privateConsultationFee
      this.status = response.data.status
    },
    async updateConsultation () {
      await ConsultationsService.updateConsultation({
        id: this.$route.params.id,
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
