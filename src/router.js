import { createRouter, createWebHistory } from "vue-router";
import ListPage from './views/ListPage.vue'
import NotFoundPage from './views/NotFoundPage.vue'

const routes = [
  {
    name: 'Home', 
    path: '/', 
    component: ListPage
  },
  {
    name: 'NotFound', 
    path: '/:pathMatch(.*)*', 
    component: NotFoundPage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})