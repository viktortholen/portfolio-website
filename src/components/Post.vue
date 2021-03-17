<template>
  <div class="post">
    <div class="container">
      <img
        src="https://media3.giphy.com/media/Jo1Ox5v5pV9g9ati4S/200w.webp?cid=ecf05e47pbvp548jylvt7qlij5cadgcq2xfmfz56f68xjwu4&rid=200w.webp"
        alt=""
      />
    </div>
    <div class="flex-content">
      <div class="flex-wrapper">
        <div class="post-title">
          <h2 id="title">{{proj.title}}</h2>
        </div>
        <div class="text-container">
          <div class="text">
            
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </div>
      </div>
      <div class="links-section">
        <div class="links-container">
          <p>Tools: </p>
          <p>Frameworks: </p>
          <p>Languages: </p>
          <p>Github: </p>

        </div>
      </div>

      <div class="images-container">

      </div>
    </div>

    <div class="section-right"></div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props:["proj"],
};
</script>

<style scoped>
.post {
  max-width: 80%;
  justify-content: center;
  margin: auto;
  margin-top: 2%;
}
.links-container{
  padding: 10%;
  color: rgb(209, 209, 209);
}
.links-container p{
  padding-top: 10px;
}
.links-section {
  /* background: red; */
  width: 40%;
  height: auto;
  justify-content: center;
  font-size: 1.2rem;
}
.flex-content {
  display: flex;
}
.flex-wrapper {
  width: 40%;
  margin-left: 20%;
}
.section-right {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 40%;
  margin-left: 65%;
  z-index: -100;
  margin-top: 0;
  background: rgb(31, 31, 31);
}
.text-container {
  width: 80%;
  height: auto;
  justify-content: center;
}
.text {
  color: white;
  font-size: 1.2rem;
}
#title{
  font-size: 2rem;
}
.post-title {
  width: 100%;
  height: auto;
  justify-content: center;
  color: white;
}
.container {
  width: 100%;
  height: auto;
  padding-top: 5vh;
  align-content: center;
  overflow: hidden;
}
.container img {
  margin: auto;
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
}
</style>