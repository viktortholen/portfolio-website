<template>
  <div>
    <post :proj="project">
      <template v-slot:content>
        <div class="text-container">
          <div class="text">
            <p>This project was part of the course TSBK03 - Advanced Game Programming, and explores the destruction of 2D objects such as walls and glass planes. The project was implemented with C++ and OpenGL on Linux and Mac. A 2D Voronoi diagram was made using Fortune's algorithm, which was then extruded into 3D. The resulting fragments were then simulated with Bullet Physics as rigid bodies and rendered to the screen. The simulation was done in real-time with several different patterns and some of them are shown in the images above. Overall, the project was really interesting as I got to explore several libraries and techniques, and making them work together in a good way. </p>
          </div>
        </div>
      </template>
    </post>
  </div>
</template>

<script>
import Post from '../../components/Post.vue';

export default {
  name: "VoronoiFracturing",
  components:{
    Post,
  },
  data(){
    return {
       project: 
        {
          id: 1,
          title: "VoronoiFracturing",
          media: [{video: false, source: require("@/assets/portfolio/VoronoiFracturing/0.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/1.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/2.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/3.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/4.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/5.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/6.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/7.png")},{video: false, source: require("@/assets/portfolio/VoronoiFracturing/8.png")}],
          date: "2022-01-10",
          page: "VoronoiFracturing",
          tools: "OpenGL",
          lang: "C++",
          github: "https://github.com/viktortholen/VoronoiFracturing",
          githubtext: "Voronoi Fracturing",
          credits: "Viktor Tholén, Iris Kotsinas",
          paper: "VoronoiFracturingReport.pdf",
        }
      
    }
  }
}
</script>

<style scoped>
</style>