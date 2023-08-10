import mutations from './mutations.ts';
import getters from './getters.ts';
import actions from './actions.ts';

export default {
  namespace: true,
  state() {
    return {};
  },
  getters,
  mutations,
  actions,
};
