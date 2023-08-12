import { ContactData, RequestsState } from '@/types/RequestsState';
import { ActionTree } from 'vuex';
import { RootState } from '@/types/RootState';

const actions: ActionTree<RequestsState, RootState> = {
  async contactCoach(context, payload) {
    const newRequest: ContactData = {
      email: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      },
    );

    const resData = await response.json();
    if (!response.ok) {
      const error = new Error(resData.message || 'Failed to send request.');
      throw error;
    }
    newRequest.id = resData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=` +
        token,
    );
    const resData = await response.json();
    if (!response.ok) {
      const error = new Error(resData.message || 'Failed to fetch requests');
      throw error;
    }

    const requests = [];
    for (const key in resData) {
      const request: ContactData = {
        id: key,
        coachId: coachId,
        email: resData[key].email,
        message: resData[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};

export default actions;
