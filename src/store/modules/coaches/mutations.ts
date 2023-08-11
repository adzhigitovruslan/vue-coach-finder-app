import { CoachesState, Coach } from '@/types/CoachesState';

export default {
  registerCoach(state: CoachesState, payload: Coach) {
    state.coaches.push(payload);
  },
  setCoaches(state: CoachesState, payload: Coach[]) {
    state.coaches = payload;
  },
  setFetchTimestamp(state: CoachesState) {
    state.lastFetch = new Date().getTime();
  },
};
