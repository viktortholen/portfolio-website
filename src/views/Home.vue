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
          title: "Third person shooter",
          tags: "Game",
          image: require("@/assets/portfolio/ThirdpersonShooter/ThirdpersonShooter_thumbnail.jpg"),
          date: "2021-10-25",
          page: "3rdpersonshootergame",
        },
        {
          title: "Modelling and Animation",
          tags: "Computer Graphics",
          image: require("@/assets/portfolio/ThirdpersonShooter/ThirdpersonShooter_thumbnail.jpg"),
          date: "2021-06-02",
          page: "ModellingandAnimation",
        },
        {
          title: "MPM in Unity",
          tags: "VFX Simulation",
          description:
            "Simulation project where a version of the Material Point Method was implemented in Unity.",
          image: require("@/assets/portfolio/MPM/MPMThumbnail.jpg"),
          date: "2020-12-15",
          page: "mpm",
        },
        {
          title: "Ray Tracer",
          tags: "Rendering",
          description:
            "Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.Monte Carlo Raytracer made in C++.",
          image: require("@/assets/portfolio/Raytracer/Raytracer.png"),
          date: "2020-10-22",
          page: "raytracer",
        },
        {
          title: "AR Game",
          tags: "Game", 
          description: " ",
          image: require("@/assets/portfolio/ARGame/game_select.jpg"),
          date: "2020-05-17",
          page: "argame",
        },
        {
          title: "Softbody Simulation",
          tags: "VFX Simulation",
          description:
            "Softbody simulation implemented in ThreeJS with a simple spring-damper system.",
          image: require("@/assets/portfolio/Softbody/SoftbodyThumbnail.jpg"),
          date: "2019-03-22",
          page: "softbody",
        },
        {
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