import mutations from './mutations.ts';
import getters from './getters.ts';
import actions from './actions.ts';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters,
  mutations,
  actions,
};
