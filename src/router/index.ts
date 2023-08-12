import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CoachesList from '@/views/coaches/CoachesList.vue';
import CoachDetail from '@/views/coaches/CoachDetail.vue';
import CoachRegistration from '@/views/coaches/CoachRegistration.vue';
import ContactCoach from '@/views/requests/ContactCoach.vue';
import RequestsRecieved from '@/views/requests/RequestsRecieved.vue';
import UserAuth from '@/views/auth/UserAuth.vue';
import NotFound from '@/views/NotFound.vue';
import store from '@/store/index.ts';

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
