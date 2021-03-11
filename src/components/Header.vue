<template>
  <div class="bar">
    <!-- <div class="logo-container">
      <router-link class="home-link" to="/">
        <img src="../assets/logo.png" alt="" />
      </router-link>
    </div> -->
    <nav class="menu">
      <router-link class="btn" id="home" to="/">HOME</router-link>
      <router-link class="btn" id="about" to="/about">ABOUT</router-link>
      <router-link class="btn" id="contact" to="/contact">CONTACT</router-link>
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
  height: 3em;
  background: rgb(50, 50, 50);
  /* display:flex;
  float: left; */
}
.menu {
  height: 100%;
  width: 30%;
  display: flex;
  float: left;
  margin-right: 20vh;

}
.btn {
  font-size: 1.1rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
  color: white;
  outline: none;
  margin: auto;
  text-decoration: none;
  margin-left: 4vh;
  /* float: right; */
}
#home{
  margin-left: 50%;
}
</style>