<template>
  <div class="mpm">
      <Post/>
      <TextBlock/>
  </div>
</template>

<script>
import Post from '../../components/Post.vue';
import TextBlock from '../../components/posts-comp/TextBlock.vue';

export default {
  name: "MPM",
  components:{
    Post,
    TextBlock
  }
}
</script>

<style scoped>
.mpm{
  margin-top: 4em;
}
</style>