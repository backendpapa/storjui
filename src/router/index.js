import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Drive from '../views/Drive.vue'
import Upload from '../views/Upload.vue'
import Bucket from '../views/Bucket.vue'
import store from '../store/index'
Vue.use(VueRouter)
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drive',
    name: 'Drive',
    component: Drive,
   
  },
  {
    path: '/drive/bucket/:bucket',
    name: 'Bucket',
    component: Bucket,
  },
  {
    path: '/drive/upload',
    name: 'Upload',
    component: Upload
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && store.state.auth==false) next({ name: 'Home' })
  else next()
})

export default router
