<template>
  <div>
    <Post :proj="project" />
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
        title: "MPM in Unity",
        description:
          "Simulation project where a version of the Material Point Method was implemented in Unity.",
        image: require("@/assets/portfolio/test/test.jpg"),
        date: "2021-02-01",
        page: "mpm",
      },
    };
  },
};
</script>

<style scoped>
</style>