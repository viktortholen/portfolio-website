<template>
  <div class="imageslider-root">
    <transition-group name="fade" tag="div">
      <div class="image-container" v-for="i in [currentIndex]" :key="i">
        <iframe v-if="currentImg.video" :height="'100%'" :width="'100%'" :src="currentImg.source" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <img v-else :src="currentImg.source" />
      </div>
    </transition-group>
    <a v-show="showNextPrevComputed" class="prev" @click="prev" >&#10094; Previous</a>
    <a v-show="showNextPrevComputed" class="next" @click="next" >&#10095; Next</a>
  </div>
</template>

<script>
export default {
    name: "ImageSlider",
    props:{
        media: {
            type: Array,
            required: true,
        }
    },
    data(){
        return{
            timer: null,
            currentIndex: 0
        }
    },
    mounted: function() {
        if(this.media.length > 1){
            this.startSlide();
        }
    },
    methods: {
        startSlide: function() {
        this.timer = setInterval(this.next, 4000);
        },
        next: function() {
        this.currentIndex += 1;
        },
        prev: function() {
        this.currentIndex -= 1;
        }
    },

    computed: {
        showNextPrevComputed(){
            return this.media.length > 1;
        },
        currentImg: function() {
        return this.media[Math.abs(this.currentIndex) % this.media.length];
        }
    }
}
</script>

<style scoped>
 .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
} 
.imageslider-root{
  position: relative;
  padding-bottom: 56.25%;
  align-content: center;
  overflow: hidden;
}
.image-container, img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
  background: rgb(27, 27, 27, 0.2);
}

.next {
    right: 0;
    border-radius: 4px 0 0 4px;
}

.prev {
    left: 0;
    border-radius: 0 4px 4px 0;
}

.prev:hover, .next:hover {
  background-color: rgb(27, 27, 27, 0.9);
}
</style>