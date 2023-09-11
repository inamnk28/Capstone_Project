import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/singleProduct/:product_id',
    name: 'singleProduct',
    component: () => import('../components/SingleProduct.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/updateProd/:id',
    name: 'updateProd',
    component: () => import('../components/UpdateProduct.vue')
  },
  // {
  //   path: '/updateUser/:id',
  //   name: 'updateUser',
  //   component: () => import('../components/UpdateUser.vue')
  // },
  {
    path: '/addThisProduct',
    name: 'addThisProduct',
    component: () => import('../components/AddProduct.vue')
  },
  {
    path: '/add-user',
    name: 'add-user',
    component: () => import('../components/AddUser.vue')
  },
  {
    path: '/AdminView',
    name: 'AdminView',
    component: () => import('../views/AdminView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router