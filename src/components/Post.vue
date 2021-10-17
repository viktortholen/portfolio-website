<template>
  <div class="post">
    <image-slider data-aos-duration="2000" data-aos="fade-in" :media="proj.media"/>
    <div class="flex-container">
      <div class="left-side">
        <div class="post-title">
          <h2 id="title">{{proj.title}}</h2>
        </div>
        <div class="text-container">
          <div class="text">
            
            {{proj.description}}
          </div>
        </div>
      </div>
      <div class="right-side">
        <div class="links-container">
          <p>Tools: {{proj.tools}}</p>
          <p>Languages: {{proj.lang}}</p>
          <p>Github: <a :href="proj.github">{{proj.githubtext}}</a></p>

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
  props:["proj"],
};
</script>

<style scoped>
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
    margin-left: 10%;
}
.right-side {
  width: 30%;
  height: auto;
  flex-grow: 1;
  justify-content: center;
  font-size: 1.2rem;
  min-width: 300px;
}
.left-side {
  width: 50%;
  flex-grow: 4;
}
.section-right {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 40%;
  margin-left: 65%;
  z-index: -100;
  margin-top: 0;
  background: rgb(34, 34, 34);
}
.text-container {
  width: 80%;
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

</style>