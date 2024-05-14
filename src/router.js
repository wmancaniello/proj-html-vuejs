import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";

// Work in Progress
import RecipesPage from "./pages/RecipesPage.vue";
import BlogPage from "./pages/BlogPage.vue";
import PlacesPage from "./pages/PlacesPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutUsPage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsPage,
    },
    {
      path: "/recipes",
      name: "recipes",
      component: RecipesPage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
    {
      path: "/places",
      name: "places",
      component: PlacesPage,
    },
  ],
});
