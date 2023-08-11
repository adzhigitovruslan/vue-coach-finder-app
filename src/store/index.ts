import { createStore } from 'vuex';
import coachesModule from '@/store/modules/coaches/index.ts';
import requestsModule from '@/store/modules/requests/index.ts';
const store = createStore({
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
  },
});

export default store;
