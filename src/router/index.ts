import { createRouter, createWebHistory } from "vue-router";
import PersonsView from "../views/PersonsView.vue";

const routes = [
  { path: "/", component: PersonsView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});