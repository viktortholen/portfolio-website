<template>
  <div class="content">
    <Header />
    <Info />
    <Portfolio v-bind:projects="projects" />
    <Footer />
  </div>
</template>

<script>
import Info from "../components/Info.vue";
import Portfolio from "../components/Portfolio.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Info,
    Portfolio,
    Header,
    Footer,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Sample Project",
          image: require("@/assets/portfolio/test/girl_profile.png"),
          date: "2021-02-01",
        },
        {
          id: 2,
          title: "Sample Project",
          image: require("@/assets/portfolio/test/girl_profile.png"),
          date: "2021-02-01",
        },
        {
          id: 3,
          title: "Sample Project",
          image: require("@/assets/portfolio/test/girl_profile.png"),
          date: "2021-02-01",
        },
        {
          id: 4,
          title: "Sample Project",
          image: require("@/assets/portfolio/test/girl_profile.png"),
          date: "2021-02-01",
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