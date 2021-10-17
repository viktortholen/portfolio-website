<template>
  <div>
      <Post :proj="project"/>
  </div>
</template>

<script>
import Post from '../../components/Post.vue';

export default {
  name: "MPM",
  components:{
    Post,
  },
  data(){
    return {
       project: 
        {
          id: 1,
          title: "2D Platform Game",
          description:"This was a group project during my second year at university. We made a 2D platform-game using Unity called Fluff’s UI adventure which was a game where the main character, called Fluff, has the mission to find a portal to reach the next level. Each level becomes harder and more “user friendly” meaning that the graphics becomes better, the music changes, etc. The first level is very dull and boring, wheres in the last level is packed with things. Although the game is pretty basic, I learned a lot making it.",
          video: true,
          embedLink: "https://www.youtube.com/embed/7VimFKRq2TE",
          date: "2018-12-17",
          page: "2dgame",
          tools: "Unity",
          lang: "C#",
          github: "https://github.com/viktortholen/TNM040-project",
          githubtext: "2D-Platform Game"
        }
      
    }
  }
}
</script>

<style scoped>
</style>