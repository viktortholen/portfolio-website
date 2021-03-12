<template>
  <div class="post">
    <div class="container"></div>
    <div class="post-title">
      <h1>Title</h1>
    </div>
    <div class="text-container">
        <div class="text">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name: "Intro",
    
};
</script>

<style scoped>
.collage-image {
  display: block;
  position: relative;
  height: 0;
  padding: 30% 0 0 0;
  background: rgb(142, 173, 173);
  overflow: hidden;
  width: 50%;
  margin: 0 auto;
  margin-top: 2vh;
}

.container {
  display: block;
  position: relative;
  height: 0;
  padding: 30% 0 0 0;
  background: rgb(142, 173, 173);
  overflow: hidden;
  width: 70%;
  margin: 0 auto;
  margin-top: 2vh;
}
.text-container {
  width: 50%;
  height: auto;
  background: rgb(55, 55, 55);
  margin: auto;
  justify-content: center;
}
.text{
    padding: 4vw;
    color: white;
}
.post-title {
  width: 50%;
  height: 10vh;
  background: inherit;
  margin: auto;
  justify-content: center;
  color: white;
}
</style>