import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CoachesList from '@/views/coaches/CoachesList.vue';
import CoachDetail from '@/views/coaches/CoachDetail.vue';
import CoachRegistration from '@/views/coaches/CoachRegistration.vue';
import ContactCoach from '@/views/requests/ContactCoach.vue';
import RequestsRecieved from '@/views/requests/RequestsRecieved.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: CoachesList,
  },
  {
    path: '/coaches/:id',
    name: 'coachId',
    props: true,
    component: CoachDetail,
    children: [{ path: 'contact', component: ContactCoach }],
  },
  {
    path: '/register',
    name: 'register',
    component: CoachRegistration,
  },
  {
    path: '/requests',
    name: 'requests',
    component: RequestsRecieved,
  },
  {
    path: '/:notFound(.*)',
    name: 'not-found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
