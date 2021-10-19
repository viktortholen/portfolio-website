<template>
  <div class="content">
    <Info />
    <Portfolio :projects="projects" />
  </div>
</template>

<script>
import Info from "../components/Info.vue";
import Portfolio from "../components/Portfolio.vue";

export default {
  name: "Home",
  components: {
    Info,
    Portfolio,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "MPM in Unity",
          tags: "VFX Simulation",
          description:
            "Simulation project where a version of the Material Point Method was implemented in Unity.",
          image: require("@/assets/portfolio/MPM/MPMThumbnail.jpg"),
          date: "2020-12-15",
          page: "mpm",
        },
        {
          id: 2,
          title: "Ray Tracer",
          tags: "Rendering",
          description:
            "Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.",
          image: require("@/assets/portfolio/Raytracer/Raytracer.png"),
          date: "2020-10-22",
          page: "raytracer",
        },
        {
          id: 3,
          title: "AR Game",
          tags: "Game", 
          description: " ",
          image: require("@/assets/portfolio/ARGame/game_select.jpg"),
          date: "2020-05-17",
          page: "argame",
        },
        {
          id: 4,
          title: "Softbody Simulation",
          tags: "VFX Simulation",
          description:
            "Softbody simulation implemented in ThreeJS with a simple spring-damper system.",
          image: require("@/assets/portfolio/Softbody/SoftbodyThumbnail.jpg"),
          date: "2019-03-22",
          page: "softbody",
        },
        {
          id: 5,
          title: "2D Platformer Game",
          tags: "Game",
          description: " ",
          image: require("@/assets/portfolio/2DPlatformGame/thumbnail.jpg"),
          date: "2018-12-17",
          page: "2dgame",
        },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
}
</style>