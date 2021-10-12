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
          description:"This is a implementation of the Monte Carlo ray tracer. It supports a simple scene with cubes and spheres that has different surface properties. Light is simulated by implementing importance rays that are sent from a viewpoint through an image plane containing pixels. When surface intersections occur, a fixed number of new rays gets distributed in different directions of a hemi-sphere with a probability density function. Ray termination is done with a Russian Roulette algorithm. Intersection algorithms has been implemented for the different types of objects in the scene. The ray tracing process has also been parallelized for the CPU with performance scaling.",
          image: require("@/assets/portfolio/Raytracer/Raytracer.png"),
          date: "2020-10-22",
          page: "raytracer",
          tools: "GLM",
          lang: "C++",
          github: "https://github.com/viktortholen/Raytracer",
          githubtext: "Raytracer"
        }
      
    }
  }
}
</script>

<style scoped>

</style>