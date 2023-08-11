import { ContactData } from '@/types/RequestsState';

export default {
  contactCoach(context: { commit: (arg0: string, arg1: ContactData) => void }, payload: ContactData) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      email: payload.email,
      message: payload.message,
    };
    context.commit('addRequest', newRequest);
  },
};
