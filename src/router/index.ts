import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CoachesList from '@/views/coaches/CoachesList.vue';
import NotFound from '@/views/NotFound.vue';
import store from '@/store/index.ts';

const CoachDetail = () => import('@/views/coaches/CoachDetail.vue');
const CoachRegistration = () => import('@/views/coaches/CoachRegistration.vue');
const ContactCoach = () => import('@/views/requests/ContactCoach.vue');
const RequestsRecieved = () => import('@/views/requests/RequestsRecieved.vue');
const UserAuth = () => import('@/views/auth/UserAuth.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:id',
    props: true,
    component: CoachDetail,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  {
    path: '/register',
    component: CoachRegistration,
    meta: { requiresAuth: true },
  },
  {
    path: '/requests',
    component: RequestsRecieved,
    meta: { requiresAuth: true },
  },
  {
    path: '/auth',
    component: UserAuth,
    meta: { requiresUnauth: true },
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
