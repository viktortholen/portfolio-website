<template>
  <div class="info">
    <div data-aos-duration="2000" data-aos="fade-in" class="center-text">
      <img class="profile" src="../assets/profileCircle.png" alt="">
      <h1 >Hi, I am Viktor Tholén</h1>
      <p>I am a 5th year MSc student in Media Technology and Engineering</p>
      <div class="buttons-container">
        <button class="btn" id="Portfolio" @click="scrollDown">Portfolio</button>
        <a :href="`${publicPath}CV2021eng.pdf`" download="CV"><button class="btn" id="Portfolio">CV</button></a>
      </div>
      
    </div>
  </div>
</template>


<script>

export default {
  name: "Info",
  methods:{
     scrollDown: function(){
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
};
</script>

<style scoped>
.profile{
  width: 15vw;
  min-width: 12em;
  height: auto;
}
.center-text {
  margin-top: 15vh;
  height: 60vh;
  width: 80%;
}

.info {
  width: 100%;
  height: 100vh;
  text-align: center;
  color: aliceblue;
  display: flex;
  justify-content: center;
  margin: 0;
  overflow: auto;
  background-color: rgb(25, 37, 59);
}
h1 {
  font-size: 3rem;
}
.btn{
  margin: 1em 2em;
  border: aliceblue;
  border-style: solid;
  padding: 0.5em 1.5em;
  background: inherit;
  color: aliceblue;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;
  width: 8em;
}

.btn:hover{
  background: aliceblue;
  color: rgb(25, 37, 59);
  transition: 0.3s ease;
}
</style>