import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Landing',
  //   component: () => import('../views/Landing.vue')
  // },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/BHomePage.vue')
  },
  {
      path: '/categories/:category',
      name: 'Categories',
      component: () => import('../views/BCategoriesPage.vue'),
      children: [
          {
              path: '',
              name: 'Category',
              component: () => import('../views/BCategoryPage.vue')
          }
      ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/BLoginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/BRegisterPage.vue')
  },
  {
    path: '/purchasing',
    redirect: '/purchasing/cart'
  },
  {
    path: '/purchasing',
    name: 'Purchasing',
    component: () => import('../views/purchasing/BPurchasingPage.vue'),
    children: [
        {
            path: 'cart',
            name: 'Cart',
            component: () => import('../views/purchasing/BCartPage.vue')
        },
        {
            path: 'shippingMethod',
            name: 'ShippingMethod',
            component: () => import('../views/purchasing/BShippingMethodPage.vue')
        },
        {
            path: 'shippingAddress',
            name: 'ShippingAddress',
            component: () => import('../views/purchasing/BShippingAddressPage.vue')
        },
        {
            path: 'paymentMethod',
            name: 'PaymentMethod',
            component: () => import('../views/purchasing/BPaymentMethodPage.vue')
        },
        {
            path: 'finalizingOrder',
            name: 'FinalizingOrder',
            component: () => import('../views/purchasing/BFinalizingOrderPage.vue')
        },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/error/BNotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
