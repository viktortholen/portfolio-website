<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//Run server: npm run serve


// export default {
//   name: 'App',
//   components: {
//     Header,
//     Footer
//   }
// }
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

</style>
