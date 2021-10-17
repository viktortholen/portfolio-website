<template>
  <div class="content">
    <Info />
    <Portfolio v-bind:projects="projects" />
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
          date: "2021-02-01",
          page: "mpm",
        },
        {
          id: 2,
          title: "Softbody Simulation",
          tags: "VFX Simulation",
          description:
            "Softbody simulation implemented in ThreeJS with a simple spring-damper system.",
          image: require("@/assets/portfolio/Softbody/SoftbodyThumbnail.jpg"),
          date: "2021-02-01",
          page: "softbody",
        },
        {
          id: 3,
          title: "Ray Tracer",
          tags: "Rendering",
          description:
            "Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.",
          image: require("@/assets/portfolio/Raytracer/Raytracer.png"),
          date: "2021-02-01",
          page: "raytracer",
        },
        {
          id: 4,
          title: "2D Platformer Game",
          tags: "Game",
          description: " ",
          image: require("@/assets/portfolio/2DPlatformGame/thumbnail.jpg"),
          date: "2021-02-01",
          page: "2dgame",
        },
        {
          id: 5,
          title: "AR Game",
          tags: "Game",
          description: " ",
          image: require("@/assets/portfolio/2DPlatformGame/thumbnail.jpg"),
          date: "2021-02-01",
          page: "argame",
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