<template>
  <div class="doctors">
    <h1>Alterar Doutor(a)</h1>
    <div class="form">
      <div>
        <input type="text" name="name" placeholder="Fulano de Tal" v-model="name">
      </div>
      <div>
        <input type="email" name="email" placeholder="fulano@host.com" v-model="email">
      </div>
      <div>
        <input type="text" name="crfa" placeholder="ABC-123" v-model="crfa">
      </div>
      <div>
        <label for="status">Status</label><br>
        <input id="status" type="checkbox" name="status" v-model="status">
      </div>
       <div>
        <button type="submit" class="btn" @click="updateDoctor">Atualizar Doutor(a)</button>
      </div>
    </div>
  </div>
</template>

<script>
import DoctorsService from '@/services/DoctorsService'

export default {
  name: 'EditDoctor',
  data () {
    return {
      name: '',
      email: '',
      crfa: '',
      status: 1
    }
  },
  mounted () {
    this.getDoctor()
  },
  methods: {
    async getDoctor () {
      const response = await DoctorsService.getDoctor({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.email = response.data.email
      this.crfa = response.data.crfa
      this.status = response.data.status
    },
    async updateDoctor () {
      await DoctorsService.updateDoctor({
        id: this.$route.params.id,
        name: this.name,
        email: this.email,
        crfa: this.crfa,
        status: this.status
      })
      this.$router.push({ name: 'Doctors' })
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
