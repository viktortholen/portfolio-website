<template>
  <div class="proj-item">
        <div class="card-image-container">
          <div class="card-image-content" v-bind:style="{ 'background-image': 'url(' + proj.image + ')' }"></div>
        </div>
        <div class="card-info">
          <div class="card-content">
            <p class="card-title">{{proj.title}}</p>
            <p class="card-date">{{proj.date}}</p>
            <p class="card-about">{{proj.description}}</p>
            <div class="centerer">
              <router-link :to="'/' + proj.page" class="card-read-more-btn">READ MORE</router-link>
            </div>
          </div>
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
  position: relative;
  text-align: center;
  color: aliceblue;
  width: 25em;
  height: 35em;
  /* background-color: rgb(219, 155, 71); */
  border-color: white;
  /* box-shadow: 
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12); */
}
.proj-item:hover .card-read-more-btn{
  background: rgb(219, 166, 166);
  color: black;
  border-style: solid;
  border-width: 1px;
}
.proj-item:hover .card-image-content{
 transform: scale(1.2);
}

.card-info{
  position: relative;
  width: 100%;
  height: 40%;
  /* background-color: rgb(50, 50, 50); */
  display: flex;
  justify-content: center;
  /* visibility: hidden; */
  z-index: 1000;
  margin-top: 50px;
}
.card-image-container{
  position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  float: right;
  overflow: hidden;
}
/* .proj-item:hover .left-card{
  visibility: visible;
} */
.card-image-content{
  /* top: 1px; */
  width: 100%;
  height: 100%;
  background-size: cover;
  transition: transform .5s ease;
}
.card-content{
  width: 80%;
  height: 100%;
}
.card-about{
  height: 60%;
  font-size: 1rem;
  text-align: center;
  color: rgb(255, 255, 255);
}
.card-title{
  margin: 0.1rem 0;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
}
.card-date{
  margin: 0 0.2rem;
  font-size: 1rem;
  color: rgb(153, 153, 153);
}
.card-read-more-btn{
  font-size: 1rem;
  cursor: pointer;
  /* border-radius: 2rem; */
  text-decoration: none;
  font-weight: 100;
  color: rgb(255, 255, 255);
  outline-style: solid;
  outline-width: 1px;
  width: 40%;
  height: 100%;
  padding: 1vh;
}
.centerer{
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
