<template>
  <div class="bar">
    <div class="logo-container">
      <router-link class="home-link" to="/">
        <img src="../assets/logo.png" alt="" />
      </router-link>
    </div>
    <nav class="menu">
      <router-link class="btn" id="about" to="/about">About</router-link>
      <router-link class="btn" id="contact" to="/contact">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.home-link{
  height: 100%;
  width: 30%;

}
.logo-container {
  height: 70%;
  width: 20%;
  float: left;
  display: flex;
  margin: 1em 1em 1em 3em;
}
.logo {
  border: none;
  background-color: inherit;
  cursor: pointer;
  outline: none;
}
img {
  /* margin: 1em; */
  /* width: 50px; */
  height: 80px;
  width: 80px;
  /* margin: 2vh; */
}
.bar {
  width: 100%;
  height: 6em;
  /* display:flex;
  float: left; */
}
.menu {
  height: 100%;
  width: 30%;
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
  margin: auto;
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