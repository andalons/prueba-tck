import { createRouter, createWebHistory } from 'vue-router'
import Tab1 from '../views/Tab1.vue'
import Tab2 from '../views/Tab2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tab-1',
      component: Tab1
    },
    {
      path: '/tab-2',
      name: 'tab-2',
    component: Tab2
    }
  ]
})

export default router
