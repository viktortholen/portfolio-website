<template>
  <div class="bar">
    <router-link to="/"><img src="../assets/logo.png" alt="" /></router-link>
    <div class="menu">
      <router-link class="btn" id="about" to="/about">About</router-link>
      <router-link  class="btn" id="contact" to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.logo{
  border: none;
  background-color: inherit;
  cursor: pointer;
  outline: none;
}
img {
  padding: 1em;
  width: 80px;
}
.bar {
  width: 100%;
  height: 6em;
  /* display:flex;
  float: left; */
}
.menu {
  height: 100%;
  width: 20%;
  display: flex;
  float: right;
  margin-right: 4em;

}
.btn {
  font-size: 1.4rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
  color: white;
  outline: none;
  margin:auto;
  text-decoration: none;

}
#about {
  float: right;
  margin-right: 4vh;
}
#contact {
  float: right;
  margin-right: 7vh;
}
</style>