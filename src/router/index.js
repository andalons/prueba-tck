import { createRouter, createWebHistory } from 'vue-router'
import Tab1View from '../views/tab-1-view/Tab1View.vue'
import Tab2View from '../views/tab-2-view/Tab2View.vue'
import NotFoundView from '../views/not-found-view/NotFoundView.vue'
import BeersList from '../components/tab2/beers-list/BeersList.vue'
import BeerDetails from '../components/tab2/beer-details/BeerDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'routerlink-active',
  routes: [
    {
      path: '/',
      redirect: '/tab-1'
    },
    {
      path: '/tab-1',
      name: 'tab-1',
      component: Tab1View
    },
    {
      path: '/tab-2',
      name: 'tab-2',
      /* redirect: 'tab-2/beers', */
      component: Tab2View,
      children: [
        {
          path: 'beers',
          alias: '',
          name: 'beers-list',
          component: BeersList
        },
         {
          path: 'beers/:id',
          name: 'beers-details',
          component: BeerDetails
        }
      ]
    }, 
  /*   {
      path: '/tab-2/beers/:beerId',
      name: 'beer-details',
      component: BeerDetails
    }, */
    { 
      path:'/:NotFound',
      component: NotFoundView
    }
      
   
  ]
})

export default router
