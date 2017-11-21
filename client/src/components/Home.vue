<template>
  <div id="home">
    <router-link class="btn" v-bind:to="{ name: 'Pathologies' }">Patologias</router-link>
    <router-link class="btn" v-bind:to="{ name: 'HealthPlans' }">Convênios</router-link>
    <router-link class="btn" v-bind:to="{ name: 'Doctors' }">Doutores(as)</router-link>
    <router-link class="btn" v-bind:to="{ name: 'Patients' }">Pacientes</router-link>
    <router-link class="btn" v-bind:to="{ name: 'Consultations' }">Consultas</router-link>
  </div>
</template>

<style>
a.btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>