<template>
  <div>
    <post :proj="project">
      <template v-slot:content>
        <div class="text-container">
          <div class="text">
            <p>This project was part of the course TNM084 - Procedural images, where I attempted to create a procedural game level generation algorithm in Unreal Engine 4. The main inspiration was from the old game Rogue from 1980 which was a procedurally generated game, featuring randomly placed rooms with corridors connecting them all together. I also took inspiration from L-systems which are typically used for making natural plants procedurally. My implementation features rooms of different sizes with doors that connect them. It also has support for walls, floors and roofs as it is intended for 3D games. Finally I added multiple floors which connect together with stairs in a neat way. The whole project was really experimental and fun to play around with. More information can be found in the project paper or the source code provided.</p>
          </div>
        </div>
      </template>
    </post>
  </div>
</template>

<script>
import Post from '../../components/Post.vue';

export default {
  name: "ProceduralGameMap",
  components:{
    Post,
  },
  data(){
    return {
       project: 
        {
          id: 1,
          title: "Procedural Game Map",
          media: [{video: false, source: require("@/assets/portfolio/ProceduralGameMap/doorsandrooms.png")}, {video: false, source: require("@/assets/portfolio/ProceduralGameMap/play.png")}],
          date: "2022-01-10",
          page: "ProceduralGameMap",
          tools: "Unreal Engine 4",
          lang: "C++",
          github: "https://github.com/viktortholen/ProceduralGame",
          githubtext: "Procedural Game Map",
          credits: "Viktor Tholén",
          paper: "ProceduralGameReport.pdf",
        }
      
    }
  }
}
</script>

<style scoped>
</style>