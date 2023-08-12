import { GetterTree } from 'vuex';
import { AuthState } from '@/types/AuthState';
import { RootState } from '@/types/RootState';

const getters: GetterTree<AuthState, RootState> = {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};

export default getters;
