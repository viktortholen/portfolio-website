<template>
  <div class="proj-item">

        <div class="left-card">
          <div class="left-card-content">
            <p class="card-title">{{proj.title}}</p>
            <p class="card-date">{{proj.date}}</p>
            <p class="card-about">{{proj.description}}</p>
            <router-link :to="'/' + proj.page" class="card-read-more-btn">Read More</router-link>
          </div>
        </div>
        <div class="right-card">
          <div class="right-card-content" v-bind:style="{ 'background-image': 'url(' + proj.image + ')' }"></div>
        </div>
        
  </div>
</template>

<script>

export default {
  name: 'ProjectItem',
  props: ["proj"],
}
</script>


<style scoped>
.proj-item{
  text-align: center;
  color: aliceblue;
  /* display: flex;
  justify-content: center; */
  width: 45em;
  height: 25em;
  background-color: antiquewhite;
  border-color: white;
  /* border-style: solid; */
  /* border-width: 1px; */
   box-shadow: 
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
.left-card{
  width: 50%;
  height: 100%;
  background-color: rgb(50, 50, 50);
  display: flex;
  float: left;
  /* border-radius: 1em 0em 0em 1em; */
}
.right-card{
  width: 50%;
  height: 100%;
  /* background-color: rgb(255, 255, 255); */
  display: flex;
  float: right;
  /* background-image: url("../assets/portfolio/test/girl_profile.png"); */
  /* border-radius: 0em 1em 1em 0em; */
}
.right-card-content{
  width: 100%;
  height: 100%;
  background-size: cover;
}
.left-card-content{
  margin: 1em;
  width: 100%;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  
}
.card-about{
  height: 40%;
  font-size: 1rem;
  text-align: left;
  color: rgb(255, 255, 255);
}
.card-title{
  font-size: 2rem;
  text-align: left;
  color: rgb(255, 255, 255);
}
.card-date{

  font-size: 1rem;
  text-align: left;
  color: rgb(153, 153, 153);
}
.card-read-more-btn{
  font-size: 1.2rem;
  width: 60%;
  height: 10%;
  background-color: white;
  cursor: pointer;
  /* display: inline-block; */
  color: rgb(27, 27, 27);
  outline: none;
  margin: 1em;
  padding: 0.4em 0.7em;
  /* border-style: solid; */
  /* position: relative; */
  bottom: 0;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 700;

}
</style>
