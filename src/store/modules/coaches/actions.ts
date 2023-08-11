import { Coach } from '@/types/CoachesState';

export default {
  registerCoach(
    context: { rootGetters: { userId: string }; commit: (arg0: string, arg1: Coach) => void },
    data: Coach,
  ) {
    const coachData = {
      ...data,
      id: context.rootGetters.userId,
    };
    context.commit('registerCoach', coachData);
  },
};
