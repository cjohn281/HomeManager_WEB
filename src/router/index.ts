import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/SharedViews/MainView.vue";
import PersonsView from "../views/BudgetManagerViews/PersonsView.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/BudgetManager/persons", component: PersonsView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});