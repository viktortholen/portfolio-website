<template>
  <div class="bar">
    <nav class="menu">
      <div id="marker"></div>
      <router-link class="btn" id="home" to="/" @click.native="indicator">Home</router-link>
      <router-link class="btn" id="About" to="/about" @click.native="indicator">About</router-link>
      <router-link class="btn" id="Contact" to="/contact" @click.native="indicator">Contact</router-link>
    </nav>
  </div>
</template>

<script>

// console.log(marker)


// items.forEach(link => {
//   link.addEventListener('click', (e) => {
//     indicator(e.target);
//   })
// });

export default {
  name: "Header",
  mounted(){
    window.addEventListener('resize', this.placeIndicator);
    this.placeIndicator();
  },
  methods: {
    indicator: function (e){
      var marker= document.querySelector("#marker");
      marker.style.left = e.srcElement.offsetLeft + "px";
    },
    placeIndicator: function(){
      var marker = document.querySelector("#marker");
      var selected;

      if(this.$route.name === "About" || this.$route.name === "Contact" ){
        selected = document.querySelector("#" + this.$route.name);
      }
      else{
        selected = document.querySelector("#home");
      }
        marker.style.left = selected.offsetLeft + "px";
    },
   

  }
};
</script>

<style scoped>
#marker{
  position: absolute;
  height: 2px;
  width: 6.6em;
  background: white;
  text-decoration: none;
  margin-top: 2.95em;
  border-radius: 2rem;
  transition: 0.5s;
}
.home-link{
  height: 100%;
  width: 30%;
}
.bar {
  position: absolute;
  width: 100%;
  height: 3em;
  /* background: rgb(27,27,27); */
  background: inherit;
  /* display:flex;
  float: left; */
}
.menu {
  height: 100%;
  width: 24em;
  display: flex;
  /* float: left; */
  /* margin-right: 10vw; */
  margin-left: 20%;
  /* align-content: center;
  justify-content: center; */
}
.btn {
  font-size: 1.1rem;
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: inline-block;
  color: white;
  outline: none;
  /* margin: auto 2em auto 2em; */
  margin: auto;
  width: 6em;
  text-decoration: none;
  text-align: center;
  /* margin-left: 4vh; */
  /* float: right; */
}
</style>