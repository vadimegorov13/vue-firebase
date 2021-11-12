import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreatePost from "../views/CreatePost.vue";
import PostList from "../views/PostList.vue";
import Edit from "@/views/Edit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/post-list",
    name: "PostList",
    component: PostList,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
