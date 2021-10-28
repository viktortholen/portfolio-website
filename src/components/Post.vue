<template>
  <div class="post">
    <image-slider v-if="proj.media !== undefined" data-aos-duration="1000" data-aos="fade-in" :media="proj.media"/>
    <div class="flex-container">
      <div class="left-side">
        <div class="post-title">
          <h2 id="title">{{proj.title}}</h2>
        </div>
        <slot name="content">
        </slot>
      </div>
      <div class="right-side">
        <div class="links-container">
          <div v-if="proj.credits !== undefined"><h4>CREDITS:</h4> {{proj.credits}}</div>
          <div><h4>TOOLS:</h4> {{proj.tools}}</div>
          <div><h4>LANGUAGES:</h4> {{proj.lang}}</div>
          <div v-if="proj.github !== undefined"><h4>GITHUB:</h4> <a :href="proj.github">{{proj.githubtext}}</a></div>
          <div v-if="proj.paper !== undefined"><h4>PAPER:</h4>  <a :href="`${publicPath}${proj.paper}`" target="_blank">Project paper</a></div>

        </div>
      </div>
    </div>

    <div class="section-right"></div>
  </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue';
export default {
  name: "Post",
  components:{
    ImageSlider
  },
  data(){
    return {
      publicPath: process.env.BASE_URL
    }
  },
  props:["proj"],
};
</script>

<style scoped lang="scss">

.image-container{
  width: 70%;
  padding: 2em 0;
}
.links-container{
  font-weight: 300;
  h4{
    font-weight: 600;
  }

}
.post {
  max-width: 60%;
  margin: auto;
  margin-top: 6em;
}
.links-container{
  color: rgb(209, 209, 209);
}
.links-container p{
  padding-top: 10px;
}
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
    /* margin-left: 10%; */
}
.right-side {
  width: 30%;
  height: auto;
  flex-grow: 1;
  justify-content: center;
  font-size: 1.2rem;
  min-width: 400px;
}
.left-side {
  width: 60%;
  flex-grow: 4;
  
}
.section-right {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 48%;
  margin-left: 70%;
  z-index: -100;
  margin-top: 0;
  background: rgb(10, 16, 26);
}
.text-container {
  width: 90%;
  height: auto;
  justify-content: center;
}
.text {
  color: white;
  font-size: 1.2rem;
}
#title{
  font-size: 2rem;
}
.post-title {
  width: 100%;
  height: auto;
  justify-content: center;
  color: white;
}
@media only screen and (max-width: 1000px) {
.post {
  max-width: 80%;
  margin: auto;
  margin-top: 6em;
}
}
@media only screen and (max-width: 600px) {
  .right-side {
    min-width: 200px;
  }
  .text-container {
  width: 100%;
}
}
</style>