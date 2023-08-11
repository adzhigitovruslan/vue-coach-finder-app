import { CoachesState, Coach } from '@/types/CoachesState';

export default {
  registerCoach(state: CoachesState, payload: Coach) {
    state.coaches.push(payload);
  },
};
