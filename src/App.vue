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

<style>
 @font-face {
   font-family: "Latinka";
   src: url(./fonts/latinka/TTF/Latinka_Regular.ttf) format("truetype");
 }
#app {
    font-family: "Latinka", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow:auto;

}
body{
  margin: 0;
  padding: 0;
  background-color: rgb(27, 27, 27);
  
}
a {
    color: white
}
</style>
