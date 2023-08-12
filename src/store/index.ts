import { createStore } from 'vuex';
import coachesModule from '@/store/modules/coaches/index.ts';
import requestsModule from '@/store/modules/requests/index.ts';
import authModule from '@/store/modules/auth/index.ts';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
