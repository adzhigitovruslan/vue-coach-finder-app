export interface Coach {
  id: string;
  firstName: string;
  lastName: string;
  areas: string[];
  description: string;
  hourlyRate: number;
}

export interface CoachesState {
  coaches: Coach[];
}

export interface CoachesGetters {
  coaches: Coach[];
  hasCoaches: boolean;
  isCoach: boolean;
}
