
<template>
  <img alt="Vue logo" src="./assets/logo.png" style="width:70px"/>
  <h1>Seja Bem-Vindo(a)</h1>
  <hr>
    <div class="items">

  <ItemVue v-for="servico, index in servicos" :key="index"
  :item="servico"/>
  </div>
  <FooterVue/>
  </template>

<script setup>
import FooterVue from './components/Footer.vue';
  import ItemVue from "./components/Item.vue";
</script>

<script>
import Dados from './db/services.json';
export default {
  data() {
    return {
      servicos: null,
    }
  },
  methods: {
    async fetchData() {
          const req = await fetch("https://github.com/krokreti/vueApps/blob/main/vite-test/src/db/services.json");
    const data = await req.json();
    this.servicos = data;
    }
  },
  mounted() {
  //  let target = ("https://github.com/krokreti/vueApps/blob/main/vite-test/src/db/services.json");
  //  fetch(target)
  //   .then(res => res.json())
  //   .then(res => this.servicos = res)
  //   .catch(e => console.log(e))
    // this.fetchData()
    // console.log(this.servicos)
    this.servicos = Dados;
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  background: url("https://cdn.pixabay.com/photo/2017/01/24/03/53/plant-2004483_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
}

.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
