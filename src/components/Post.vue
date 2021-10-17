<template>
  <div class="post">
    <div class="container">

      <iframe v-if="proj.video" :width="'auto'" :height="'80%'" :src="proj.embedLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <img
      v-else
        :src="proj.image"
        alt=""
      />

    
    
    </div>
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

      <!-- <div class="images-container">

      </div> -->
    </div>

    <div class="section-right"></div>
  </div>
</template>

<script>
export default {
  name: "Post",
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
  /* padding: 10%; */
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
  /* background: red; */
}
.left-side {
  width: 50%;
  flex-grow: 4;
  /* margin-right: 20%; */
  /* min-width: 200px; */
  /* background: blue; */
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
.container {
  position: relative;
  padding-bottom: 56.25%;
  align-content: center;
  overflow: hidden;
}

.container img, iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


</style>