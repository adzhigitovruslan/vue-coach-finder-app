import { GetterTree } from 'vuex';
import { RequestsState } from '@/types/RequestsState';
import { RootState } from '@/types/RootState';

const getters: GetterTree<RequestsState, RootState> = {
  requests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  },
};

export default getters;
