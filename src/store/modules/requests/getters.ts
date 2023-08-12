import { GetterTree } from 'vuex';
import { RequestGetters, RequestsState } from '@/types/RequestsState';
import { RootGetters, RootState } from '@/types/RootState';

const getters: GetterTree<RequestsState, RootState> = {
  requests(state, _, _2, rootGetters: RootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters: RequestGetters) {
    return getters.requests && getters.requests.length > 0;
  },
};

export default getters;
