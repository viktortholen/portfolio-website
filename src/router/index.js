import Vue from "vue";
import VueRouter from "vue-router";

//pages
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

//posts
import MPM from "../views/posts/MPM.vue";
import Softbody from "../views/posts/Softbody.vue";
import Raytracer from "../views/posts/Raytracer.vue";
import Platformer from "../views/posts/Platformer.vue";
import ARGame from "../views/posts/ARGame.vue";
import ThirdpersonShooter from "../views/posts/ThirdpersonShooter.vue";
import ModellingandAnimation from "../views/posts/ModellingandAnimation.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/projects/mpm",
    name: "MPM",
    component: MPM,
  },
  {
    path: "/projects/softbody",
    name: "Softbody",
    component: Softbody,
  },
  {
    path: "/projects/raytracer",
    name: "Raytracer",
    component: Raytracer,
  },
  {
    path: "/projects/2dgame",
    name: "2D Game",
    component: Platformer,
  },
  {
    path: "/projects/argame",
    name: "AR Game",
    component: ARGame,
  },
  {
    path: "/projects/3rdpersonshootergame",
    name: "ThirdpersonShooter",
    component: ThirdpersonShooter,
  },
  {
    path: "/projects/ModellingandAnimation",
    name: "ModellingandAnimation",
    component: ModellingandAnimation,
  },
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
