export interface ContactData {
  id?: string;
  email: string;
  message: string;
  coachId?: string;
}

export interface RequestsState {
  requests: ContactData[];
}
