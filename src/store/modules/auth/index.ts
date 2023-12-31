import mutations from './mutations.ts';
import getters from './getters.ts';
import actions from './actions.ts';

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  getters,
  mutations,
  actions,
};
