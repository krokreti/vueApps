<template>
<div>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Hamburguer"
    }
  },  
}
</script>

<style>

  * {
    font-family: Helvetica;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .main-container {
    min-height: 400px;
    margin: 50px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222
  }

</style>
