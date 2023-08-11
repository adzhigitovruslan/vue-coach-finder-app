export interface Coach {
  id: string;
  firstName: string;
  lastName: string;
  areas: string[];
  description: string;
  hourlyRate: number | null;
}

export interface CoachForm {
  id: string;
  firstName: {
    val: string;
    isValid: boolean;
  };
  lastName: {
    val: string;
    isValid: boolean;
  };
  areas: {
    val: string[];
    isValid: boolean;
  };
  description: {
    val: string;
    isValid: boolean;
  };
  hourlyRate: {
    val: number | null;
    isValid: boolean;
  };
}

export interface CoachesState {
  coaches: Coach[];
}

export interface CoachesGetters {
  coaches: Coach[];
  hasCoaches: boolean;
  isCoach: boolean;
}
