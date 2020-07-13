import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/guests',
    name: 'Guests',
    component: () => import('../views/Guests.vue'),
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('../views/Location.vue'),
  },
  {
    path: '/amenities',
    name: 'Amenities',
    component: () => import('../views/Amenities.vue'),
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../views/Success.vue'),
  },
  {
    path: '/not-found',
    name: '404',
    component: () => import('../views/404page.vue'),
  },
  { path: '*', redirect: '/not-found' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
