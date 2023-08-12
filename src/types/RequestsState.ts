export interface ContactData {
  id?: string;
  email: string;
  message: string;
  coachId?: string;
}

export interface RequestsState {
  requests: ContactData[];
}

export interface RequestGetters {
  requests: ContactData[];
  hasRequests: boolean;
}

export interface forceRefresh {
  forceRefresh: boolean;
}
