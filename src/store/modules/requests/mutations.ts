import { ContactData, RequestsState } from '@/types/RequestsState';
import { MutationTree } from 'vuex';

const mutations: MutationTree<RequestsState> = {
  addRequest(state, payload: ContactData) {
    state.requests.push(payload);
  },
  setRequests(state, payload: ContactData[]) {
    state.requests = payload;
  },
};

export default mutations;
