import { CoachesState } from '@/types/CoachesState';
import { GetterTree } from 'vuex';
import { RootState } from '@/types/RootState';
import { RootGetters } from '@/types/RootState';
import { CoachesGetters } from '@/types/CoachesState';

const getters: GetterTree<CoachesState, RootState> = {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters: CoachesGetters, _2, rootGetters: RootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};

export default getters;
