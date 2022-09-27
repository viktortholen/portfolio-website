<template>
  <div>
    <post :proj="project">
      <template v-slot:content>
        <div class="text-container">
          <div class="text">
            <p>As a big fan of Real time Strategy (RTS) games, I got inspired by Frost Giant Studios showcase of their pathfinding tech for their upcoming game StormGate from <a href="https://www.youtube.com/watch?v=EjBOkaaaVHk">this Youtube interview</a>. Although they don't show how they made it, I still wanted to explore how pathfinding in games are usually done. A* is a common algorithm for pathfinding but struggles with many units usually. Flowfield pathfinding is a better way to simulate large amount of particles/units at once with one simple breadth first search. The distance of each tile is calculated from the destination point.</p>
          </div>
          <img class="large" :src="project.images[1]" alt="">
          
          <div class="text">
            <p>Then we can easily make vectors from these distances which point towards less distances and create a flow field consisting of all these vectors. Then all the particles can follow the same flow field, which means that only one flow field needs to be generated for each command. This is highly efficient compared to calculating an A* algorithm for each particle.  </p>
          </div>
          <img class="large" :src="project.images[0]" alt="">
        </div>
          <div class="text">
            <p>This project was only a small fun study of how these type of algorithms work and how you could use them for game development. In reality, this algorithm is usually combined with the A* to make it more optimized where the area is divided in different regions. The A* is used for the regions and the flow field is then used only within the regions of the A* path. However, I couldn't find any recent papers on the topic which limited my implementation somewhat. Future improvements to my implementation would be to fix some collisions where particles can get stuck in the obstacles.</p>
          </div>  
      </template>
    </post>
  </div>
</template>

<script>
import Post from '../../components/Post.vue';

export default {
  name: "FlowField",
  components:{
    Post,
  },
  data(){
    return {
       project: 
        {
          id: 1,
          title: "FlowField",
          media: [{video: false, source: require("@/assets/portfolio/FlowField/flowfield_sim.gif")},{video: false, source: require("@/assets/portfolio/FlowField/flowfield_sim-debug.gif")}],
          images: [
            require("@/assets/portfolio/FlowField/debug.png"), 
            require("@/assets/portfolio/FlowField/distance.png"), 
          ],
          date: "2022-07-17",
          page: "FlowField",
          tools: "Unity",
          lang: "C#",
          github: "https://github.com/viktortholen/RTS-PathFinding",
          githubtext: "FlowField(RTS-PathFinding)",
          credits: "Viktor Tholén"
        }
    }
  }
}
</script>

<style scoped>
.image-container{
  width: 100%;
  display: flex;
  justify-content: center;
}
.large{
  width: 100%;
}
</style>