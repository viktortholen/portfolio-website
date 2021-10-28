<template>
  <div>
      <post :proj="project">
        <template v-slot:content>
          <div class="text-container">
            <div class="text">
              <p>This is a summary of the assignments in the course Modelling and Animation at Linköping University. In total, there were six different labs where each covered different topics within computer graphics. We were given a basic codebase for adding and displaying 3D meshes and we improved and implemented additional features on this codebase for each lab. </p>
              <hr>
              <h3>Meshes</h3>
              <p>The first three labs covered meshes so I will group these together since they are all about the same field.</p>
              
              <h4>Mesh data structures</h4>
              <p>The first lab was about the half-edge mesh data structure and the physical attributes of a mesh. This included for instance how to calculate vertex normals, mesh area and volume. Lastly, we also calculated the mean curvature of a mesh and used it for smoothing the object.</p>

              <h4>Mesh decimation</h4>
              <p>The second lab studies mesh decimation techniques where the assignment was to reduce the number of polygons of the mesh. We used quadric error metric which allowed us to determine a cost of the placement of the new vertices when collapsing. This cost was then used to decide which vertices that should be collapsed.</p>

              <h4>Splines and subdivision</h4>
              <p>This was the third lab. It covered smooth surfaces and curves. We extended the half-edge mesh to be able to subdivide meshes with Loop's subdivision scheme.</p>
              <img :src="project.images[0]" alt="">
              <img :src="project.images[1]" alt="">
              <img :src="project.images[2]" alt="">
              <hr>
              <h3>Implicit surfaces</h3>
              Two labs was about implicit surfaces, where surfaces are described by mathematical equations instead of polygons.

              <h4>Implicit surface implementation</h4>
              <p>Implicit surfaces guarantees a represntation that is free from holes and self intersection, unlike explicit surfaces. This makes it ideal for representing fluids since they tend to have problems when trying to model them explicitly. Our task was to implement operators for a framework called constructive solid geometry(CSG). We also implemented support for quadric surfaces.</p>

              <h4>Levelset methods</h4>
              <p>In this assignment we studied the signed distance property of levelsets. This allowed us to do some transformations on the implicit surface, such as advection, dilation and erosion. Additionally, we did smoothing in the form of mean curvature.</p>
              <hr>
              <h3>Fluids</h3>
              <p>The last lab covered fluid simulation with Navier-Stokes equations using levelsets to represent the surface. The assignment was to add external forces with Euler integration, enforcing Dirichlet boundary conditions and computing the projection for volume preservation. Below is the result from this lab, exported and rendered in Blender.</p>

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
          images: [require("@/assets/portfolio/MoA/cow0.png"), require("@/assets/portfolio/MoA/cow2.png"),require("@/assets/portfolio/MoA/cow-sub1.jpg")],
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
img{
  width: 30%;
}
h3, h4{
  margin: 1rem 0 0 0;
}
p{
  margin-top: 0;
}
</style>