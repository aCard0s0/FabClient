import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/card-search',
    name: 'CardsSearch',
    component: () => import('../views/CardsSearch.vue'),
  },
  {
    path: '/card-details/:code?',
    name: 'CardDetails',
    component: () => import('../views/CardDetails.vue')
  },
  {
    path: '/deck-builder',
    name: 'deckBuilder',
    component: () => import('../views/DeckBuilder.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Feedback.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
