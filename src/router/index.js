import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/Home.vue");
const SearchResults = () => import("../views/SearchResults.vue");
const ShowDetails = () => import("../views/ShowDetails");
const PageNotFound = () => import("../views/PageNotFound.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/search/:query",
    name: "SearchResults",

    component: SearchResults
  },

  {
    path: "/show/:id",
    name: "ShowDetails",
    component: ShowDetails
  },
  {
    path: "*",
    name: "not-found",
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
