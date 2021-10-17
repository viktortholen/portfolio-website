<template>
  <div class="info">
    <div data-aos-duration="2000" data-aos="fade-in" class="center-text">
      <img class="profile" src="../assets/profileCircle.png" alt="">
      <h1 >Hi, I am Viktor Tholén</h1>
      <p>I am a 5th year MSc student in Media Technology and Engineering</p>
       <button class="btn" id="Portfolio" @click="scrollDown">Portfolio</button>
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
  }
};
</script>

<style scoped>
.profile{
  width: 15vw;
  height: auto;
}
.center-text {
  margin-top: 15vh;
  height: 60vh;
}
.scroll-down {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.3rem;
}
.info {
  top: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  color: aliceblue;
  display: block;
  margin: 0;
  overflow: auto;
  background-color: rgb(25, 37, 59);
}
h1 {
  font-size: 3em;
}
.btn{
  margin-top: 1em;
  border: white;
  border-style: solid;
  padding: 0.5em 1.5em;
  background: inherit;
  color: white;
  font-size: 1.1rem;
  outline: none;
}
.btn:hover{
  background: white;
  color: rgb(25, 37, 59);
  transition: 0.3s ease;
}
</style>