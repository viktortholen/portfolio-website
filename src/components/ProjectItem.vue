<template>
  <div class="proj-item">
    <router-link :to="'/projects/' + proj.page">
      <div class="card-image-container">
        <div class="card-image-content" v-bind:style="{ 'background-image': 'url(' + proj.image + ')' }"></div>
      </div>
      <div class="card-info">
        <div class="card-content">
          <p class="card-title">{{proj.title}}</p>
          <p class="card-about">{{proj.tags}}</p>
        </div>
          <p class="card-date">{{proj.date}}</p>
      </div>
          
          
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'ProjectItem',
  props: ["proj"],
}
</script>


<style scoped lang="scss">

.proj-item{
  position: relative;
  color: aliceblue;
  width: 20em;
  height: 20em;
  // padding-bottom: 56.5%;
  background-color: rgb(219, 155, 71);
  border-color: white;
  box-shadow: 
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
.proj-item:hover .card-read-more-btn{
  background: rgb(219, 166, 166);
  color: black;
  border-style: solid;
  border-width: 1px;
}
.proj-item:hover .card-image-content{
 transform: scale(1.2);
 visibility: visible;
}
.proj-item:hover .card-info{
  background-color: $primary-color;
}
.card-info{
  position: absolute;
  width: 100%;
  height: 20%;
  bottom: 0;
  background-color:$primary-color-faded;

  z-index: 1000;
}
.card-image-container{
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}
.card-image-content{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
  transition: transform .5s ease;
}
.card-content{
  position: absolute;
  bottom: 20%;
  left: 5%;
}
.card-about{
  margin:0;
  font-size: 1rem;
  color: rgb(209, 209, 209);
}
.card-title{
  margin:0;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
}
.card-date{
  position: absolute;
  bottom: 5%;
  right: 5%;
  margin:0;
  font-size: 1rem;
  color: rgb(209, 209, 209);
}
// @media only screen and (max-width: 600px) {
//   .proj-item{
//     width: 20em;
//     height: 20em;
//   }
// }
</style>
