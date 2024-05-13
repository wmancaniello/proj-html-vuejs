import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";

export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path:"/about",
            name:"about",
            component: AboutUsPage,

        },
        {
            path:"/contacts",
            name:"contacts",
            component: ContactsPage,
        }
    ]
})