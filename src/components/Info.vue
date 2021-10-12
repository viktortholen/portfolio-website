<template>
  <div class="info">
    <div class="center-text">
      <h1>Hi, I am Viktor Tholén</h1>
      <p>I am a 5th year MSc student in Media Technology and Engineering</p>
       <button class="btn" id="Portfolio" @click="scrollDown">Portfolio</button>
    </div>
    <div class="scroll-down">Arrow down?</div>
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
.center-text {
  margin-top: 30vh;
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