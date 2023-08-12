import { CoachesState, Coach } from '@/types/CoachesState';
import { MutationTree } from 'vuex';

const mutations: MutationTree<CoachesState> = {
  registerCoach(state, payload: Coach) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload: Coach[]) {
    state.coaches = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};

export default mutations;
