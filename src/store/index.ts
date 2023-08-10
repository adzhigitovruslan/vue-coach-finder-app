import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.ts';

const store = createStore({
  state() {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
  },
});

export default store;
