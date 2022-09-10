import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Landing',
  //   component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue')
  // },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/BHomePage.vue')
  },
  {
      path: '/categories/:category',
      name: 'Categories',
      component: () => import(/* webpackChunkName: "categories" */ '../views/BCategoriesPage.vue'),
      children: [
          {
              path: '',
              component: () => import(/* webpackChunkName: "category" */ '../views/BCategoryPage.vue')
          }
      ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/BRegisterPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not_found" */ '../views/error/BNotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
