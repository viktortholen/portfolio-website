<template>
  <div class="post">
    <div class="container">
      <img
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
// display: flex;
//  flex-flow: row wrap;

// background-color: green;
// left:0; top:80;
//  bottom: 400;
//  width: 20vw;
//  flex-grow: 1;
//  padding: 3px;
//  min-width: 200px;
//  max-width: 300px

// background-color: gold;
// float: left;
// left:20vw; 
// flex-grow: 4;
// top: 25;
// margin-right: 3px;
// padding: 8px;
// min-width: 200px;
export default {
  name: "Post",
  props:["proj"],
};
</script>

<style scoped>
.post {
  max-width: 80%;
  margin: auto;
  margin-top: 4em;
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
  width: 40%;
  height: auto;
  flex-grow: 1;
  justify-content: center;
  font-size: 1.2rem;
  min-width: 300px;
  /* background: red; */
}
.left-side {
  width: 60%;
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
  width: 100%;
  height: auto;
  padding-top: 5vh;
  align-content: center;
  overflow: hidden;
}
.container img {
  margin: auto;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
}



</style>