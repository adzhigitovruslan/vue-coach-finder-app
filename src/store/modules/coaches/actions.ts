import { Coach } from '@/types/CoachesState';
import { ActionTree } from 'vuex';
import { RootState } from '@/types/RootState';
import { RequestsState, forceRefresh } from '@/types/RequestsState';

const actions: ActionTree<RequestsState, RootState> = {
  async registerCoach(context, data: Coach) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;

    const response = await fetch(
      `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(data),
      },
    );
    // const resData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit('registerCoach', {
      ...data,
      id: userId,
    });
  },

  async loadCoaches(context, payload: forceRefresh) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`,
    );
    const resData = await response.json();
    if (!response.ok) {
      const error = new Error(resData.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in resData) {
      const coach = {
        id: key,
        firstName: resData[key].firstName,
        lastName: resData[key].lastName,
        description: resData[key].description,
        hourlyRate: resData[key].hourlyRate,
        areas: resData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setFetchTimestamp');
  },
};

export default actions;
