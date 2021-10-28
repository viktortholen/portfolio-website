<template>
  <div>
    <post :proj="project">
      <template v-slot:content>
        <div class="text-container">
          <div class="text">
            <p>This project was done by using spring mass damper systems to simulate a soft bodies in 3D. Each vertex of an object was treated like a mass and the connections between other vertices were the springs/dampers. This gave the behavior we wanted and expected from a soft body simulation. The project was first done in 2D in MATLAB and then expanded into 3D with JavaScript and THREE.js. Once we got it to work in 2D, the 3D part was easier than what we expected.</p>
          </div>
        </div>
      </template>
    </post>
  </div>
</template>

<script>
import Post from "../../components/Post.vue";

export default {
  name: "Softbody",
  components: {
    Post,
  },
  data() {
    return {
      project: {
        id: 1,
        title: "Softbody physics simulation",
        media: [{video: false, source: require("@/assets/portfolio/Softbody/SoftbodyDemo.gif")}],
        date: "2019-03-22",
        page: "softbody",
        tools: "THREE.JS, Matlab",
        lang: "Javascript",
        github: "https://github.com/viktortholen/TNM085-Soft-Body-Simulation",
        githubtext: "SoftBody",
        credits: "Viktor Tholén, Philip Ngo, Linn Storesund, Henrik Rosander"
      },
    };
  },
};
</script>

<style scoped>
</style>