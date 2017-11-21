<template>
  <div class="pathologies">
    <h1>Cadastrar Patologia</h1>
    <div class="form">
      <div>
        <input type="text" name="cid" placeholder="E015" v-model="cid">
      </div>
      <div>
        <input type="text" name="description" placeholder="Diabetes" v-model="description">
      </div>
      <div>
        <label for="status">Status</label><br>
        <input id="status" type="checkbox" name="status" v-model="status">
      </div>
       <div>
        <button type="submit" class="btn" @click="addPathology">Cadastrar Patologia</button>
      </div>
    </div>
  </div>
</template>

<script>
import PathologiesService from '@/services/PathologiesService.js'

export default {
  name: 'NewPathology',
  data () {
    return {
      cid: '',
      description: '',
      status: ''
    }
  },
  methods: {
    async addPathology () {
      await PathologiesService.addPathology({
        cid: this.cid,
        description: this.description,
        status: this.status
      })

      this.$router.push({ name: 'Pathologies' })
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
