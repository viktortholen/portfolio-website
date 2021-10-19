<template>
<div id="portfolio-background">
  <p id="portfolio-title">PORTFOLIO</p>
  <!-- <div data-aos="fade-right" class="title-underline"></div> -->
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
  components: {ProjectItem},
}
</script>

<style scoped>
.title-underline{
  background: white;
  width: 10em;
  height: 0.1em;
  margin: auto;
  border-radius: 10px;
}
#portfolio-background{
  /* background: linear-gradient(0deg,  rgba(27,27,27) 35%, rgb(25, 37, 59) 100%); */
  width: 100%;
}
#portfolio-title{
  color:rgb(255, 255, 255);
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-top: 0;
  padding-top: 5%;
  margin-bottom: 0.2em;
}
.portfolio{
  width: 80vw;
  height: 100%;
  color: aliceblue;
  padding: 1vh 1vh 6vh 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  justify-items: center;
  justify-content: center;
  margin: 5% 10% 10% 10%;
  gap: 2vh;
}
.portfolio-container{
  padding: 5% 0% 5% 0%;
  justify-items: center;
}
/* @media only screen and (max-width: 600px) {
  .portfolio-container {
    max-width: 80%;
  }
} */
</style>
