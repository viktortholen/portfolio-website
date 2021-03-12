<template>
  <div class="info">
    <div class="center-text">
      <h1>Hello world!</h1>
      <p>Hello, this is some interesting sentence!</p>
    </div>
    <div class="scroll-down">Scroll down!</div>
  </div>
</template>


<script>
window.scroll(function () {
  document
    .getElementsByClassName(".info")
    .css("opacity", 1 - window.scrollTop() / 250);
});

export default {
  name: "Info",
};
</script>

<style scoped>
.center-text {
  margin-top: 30vh;
  height: 60vh;
}
.scroll-down {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.3rem;
}
.info {
  top: 0;
  width: 100%;
  height: 100vh;
  text-align: center;
  color: aliceblue;
  display: block;
  margin: auto;
  overflow: auto;
  background-color: rgb(219, 166, 166);
}
h1 {
  font-size: 5em;
}
</style>