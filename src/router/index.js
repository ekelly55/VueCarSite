//define our routing rules
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"

//this is the only place that these views are imported. The only way to access them is throught the router

//first, create the router by invoking the createRouter function and passing it an object containing a history key and a routes key, that is an array of objects containing our routing rules.
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
    ] 
})

export default router
//router has to be exported (b/c it's js, not vue?)