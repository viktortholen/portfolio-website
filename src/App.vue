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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
    font-family: "Montserrat";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow:auto;
    font-weight: 400;
    color: aliceblue;
}
body{
  margin: 0;
  padding: 0;
  background-color: rgb(27, 27, 27);
}
/* html, body { min-height: 100%; min-width: 100%; } */
a {
    color: white
}
</style>
