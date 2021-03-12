<template>
  <div class="footer">
      <hr>
      <p> © 2021 Viktor Tholén</p>
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
  margin-top:8em;
  padding-bottom: 2em;

}
hr{
    background-color: rgb(50, 50, 50);
    border: 0 none;
    color: #eee;
    height: 1px;
    width: 70%
}

</style>
