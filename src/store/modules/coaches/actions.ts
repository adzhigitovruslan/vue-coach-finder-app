import { Coach } from '@/types/CoachesState';

export default {
  async registerCoach(
    context: { rootGetters: { userId: string }; commit: (arg0: string, arg1: Coach) => void },
    data: Coach,
  ) {
    const userId = context.rootGetters.userId;

    const response = await fetch(
      `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
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
  async loadCoaches(context: { commit: (arg0: string, arg1: Coach[]) => void }) {
    const response = await fetch(
      `https://vue-http-project-7a50b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`,
    );
    const resData = await response.json();
    if (!response.ok) {
      // error...
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
  },
};
