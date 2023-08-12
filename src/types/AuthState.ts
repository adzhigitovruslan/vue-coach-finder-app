export interface AuthState {
  didAutoLogout: boolean;
  userId: null | string;
  token: null | string;
  tokenExperation: null | string;
}

export interface SignInPayload {
  email: string;
  password: string;
}
