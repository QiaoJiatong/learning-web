import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/Red',
    name: 'Red',
    component: () =>import("../components/RedView.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router