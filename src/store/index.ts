import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.ts';

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
  },
});

export default store;
