<template>
<div class="portfolio-background">
  <p id="portfolio-title">My Latest Work!</p>
  <div class="portfolio">
      <div class="portfolio-container" v-bind:key="proj.id" v-for="proj in projects">
          <ProjectItem v-bind:proj="proj"/>
      </div>
  </div>
</div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
export default {
  name: 'Portfolio',
  props: ["projects"],
  components: {ProjectItem}
}
</script>

<style scoped>
#portfolio-title{
  color:rgb(255, 255, 255);
  font-size: 3rem;
   text-align: center;
}
.portfolio{
  /* background: blue; */
  width: 100%;
  height: 100%;
  text-align: center;
  color: aliceblue;
  padding: 1vh 1vh 6vh 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: auto; */
  justify-items: center;
  
}
.portfolio-container{
  /* width: 0%;
  height: 100%; */
  padding: 6vh 2vh 0 0;
  /* margin-left:auto;
  margin-right:auto; */
  justify-items: center;
}

</style>
