<template>
  <div>
      <Post :proj="project"/>
  </div>
</template>

<script>
import Post from '../../components/Post.vue';

export default {
  name: "Raytracer",
  components:{
    Post,
  },
  data(){
    return {
       project: 
        {
          id: 1,
          title: "Monte Carlo Ray Tracer",
          description:"This is a implementation of the Monte Carlo ray tracer. It supports a simple scene with cubes and spheres that has different surface properties. Light is simulated by implementing importance rays that are sent from a viewpoint through an image plane containing pixels. When surface intersections occur, a fixed number of new rays gets distributed in different directions of a hemi-sphere with a probability density function. We terminate rays with a Russian Roulette algorithm. We also managed to parellalize the ray tracing process on the CPU with performance scaling. This gave us the render seen above with 256 samples.",
          media: [{video: false, source: require("@/assets/portfolio/Raytracer/Raytracer.png")}],
          date: "2020-10-22",
          page: "raytracer",
          tools: "GLM",
          lang: "C++",
          github: "https://github.com/viktortholen/Raytracer",
          githubtext: "Raytracer",
          paper: "RayTracingReport.pdf",
          credits: "Viktor Tholén, Julius Halldan"
        }
      
    }
  }
}
</script>

<style scoped>

</style>