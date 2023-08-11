import { GetterTree } from 'vuex';
import { ContactData, RequestsState } from '@/types/RequestsState';
import { RootState } from '@/types/RootState';

const getters: GetterTree<RequestsState, RootState> = {
  requests(state, _, _2, rootGetters: { userId: string }) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters: { requests: ContactData[]; hasRequests: boolean }) {
    return getters.requests && getters.requests.length > 0;
  },
};

export default getters;
