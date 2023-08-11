import { ContactData, RequestsState } from '@/types/RequestsState';

export default {
  addRequest(state: RequestsState, payload: ContactData) {
    state.requests.push(payload);
  },
  setRequests(state: RequestsState, payload: ContactData[]) {
    state.requests = payload;
  },
};
