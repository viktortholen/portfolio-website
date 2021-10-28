<template>
  <div>
      <post :proj="project">
        <template v-slot:content>
          <div class="text-container">
            <div class="text">
              <p>This is a summary of the assignments in the course Modelling and Animation at Linköping University. In total, there were six different labs where each covered different topics within computer graphics. We were given a basic codebase for adding and displaying 3D meshes and we improved and implemented additional features on this codebase for each lab. </p>
              <h3>Meshes</h3>
              <p>The first three labs covered meshes so I will group these together since they are all about the same field.</p>
              
              <h5>Mesh data structures</h5>
              <p>The first lab was about the half-edge mesh data structure and the physical attributes of a mesh. This included for instance how to calculate vertex normals, mesh area and volume. Lastly, we also calculated the mean curvature of a mesh and used it for smoothing the object.</p>

              <h5>Mesh decimation</h5>
              <p>The second lab studies mesh decimation techniques where the assignment was to reduce the number of polygons of the mesh. We used quadric error metric which allowed us to determine a cost of the placement of the new vertices when collapsing. This cost was then used to decide which vertices that should be collapsed.</p>

              <h5>Splines and subdivision</h5>
              <p>The second lab studies mesh decimation techniques where the assignment was to reduce the number of polygons of the mesh. We used quadric error metric which allowed us to determine a cost of the placement of the new vertices when collapsing. This cost was then used to decide which vertices that should be collapsed.</p>

              <h3>Implicit surfaces</h3>
              

              <h3>Fluids</h3>
              <p>The</p>

            </div>
          </div>
          <div class="image-container">
            <image-slider :media="project.media2"/>
          </div>
        </template>
      </post>
  </div>
</template>

<script>
import Post from '../../components/Post.vue';
import ImageSlider from '../../components/ImageSlider.vue';
export default {
  name: "ModellingandAnimation",
  components:{
    Post,
    ImageSlider
  },
  data(){
    return {
       project: 
        {
          title: "Modelling and Animation",
          images: [require("@/assets/portfolio/MPM/MPMDemo.gif")],
          media2: [{video: false, source: require("@/assets/portfolio/MPM/MPMDemo.gif")}],
          date: "2020-12-15",
          page: "ModellingandAnimation",
          tools: "OpenGL",
          lang: "C++, C",
          github: "https://github.com/viktortholen/MPM_Unity",
          githubtext: "Material Point Method in Unity",
          paper: "SFX_Project_Report.pdf",
          credits: "Viktor Tholén"
        }
      
    }
  }
}
</script>

<style scoped>
h3{
  font-weight: 500;
}
</style>