<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
//Run server: npm run serve
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created(){
    localStorage.removeItem("scroll");
  }

}
</script>

<style lang="scss">
#app {
    font-family: "Montserrat";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow:auto;
    font-weight: 400;
}
body{
  margin: 0;
  padding: 0;
  background-color: $primary-color;
}
/* html, body { min-height: 100%; min-width: 100%; } */
a {
    color: white
}
</style>
