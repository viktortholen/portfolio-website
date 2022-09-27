<template>
  <div class="footer">
      <!-- <hr> -->
      <p> © 2022 Viktor Tholén</p>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer{
  position: relative;
  width: 100%;
  height: 4em;
  text-align: center;
  color: white;
  margin-top: 8em;
  padding-bottom: 2em;
  /* background: rgb(10, 16, 26); */
  font-size: .8rem;
  color:rgb(142, 142, 143);
}
hr{
    background-color: rgb(255, 255, 255);
    border: 0 none;
    color: #eee;
    height: 1px;
    width: 70%
}

</style>
