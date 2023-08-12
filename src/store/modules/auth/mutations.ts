import { AuthState } from '@/types/AuthState';
import { MutationTree } from 'vuex';

const mutations: MutationTree<AuthState> = {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};

export default mutations;
