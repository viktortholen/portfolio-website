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
          title: "Third person shooter",
          description:"This is a game project that I made in the course TDDD23 - Design and Programming of Computer Games. It is a rogue-like third person shooter set in a sci-fi environment with all assets made by me. The core progression system is in the form of upgrades, which includes stats like health, attack speed and lifesteal. There are also ability upgrades which modifies the way they work and another kind of upgrades that are bought with in game currency. The main inspiration for the game was Risk of Rain 2 which I find very entertaining myself. I made the game in Unreal Engine 4 during a 7 week period. This was my first game made with Unreal Engine and I learned a lot about it from making this game. A game teaser was made to show the game, and that can be seen above.",
          media: [{video: true, source: "https://www.youtube.com/embed/ZvHWQ93Bx6E"}],
          date: "2021-10-25",
          page: "3rdpersonshootergame",
          tools: "Unreal Engine",
          lang: "Blueprints, C++",
          credits: "Viktor Tholén"
        }
      
    }
  }
}
</script>

<style scoped>
</style>