import Vue from 'vue'
import VueRouter from 'vue-router'

//pages
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'


//posts
import MPM from '../views/posts/MPM.vue'
import Softbody from '../views/posts/Softbody.vue'
import Raytracer from '../views/posts/Raytracer.vue'
Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/mpm',
        name: 'MPM',
        component: MPM
    },
    {
        path: '/softbody',
        name: 'Softbody',
        component: Softbody
    },
    {
        path: '/raytracer',
        name: 'Raytracer',
        component: Raytracer
    }
];

const router = new VueRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },    
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;