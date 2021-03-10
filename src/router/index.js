import Vue from 'vue'
import VueRouter from 'vue-router'

//pages
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'


//posts
import MPM from '../views/posts/MPM.vue'
import Softbody from '../views/posts/Softbody.vue'

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
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;