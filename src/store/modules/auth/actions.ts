import { AuthState, SignInPayload } from '@/types/AuthState';
import { ActionTree } from 'vuex';
import { RootState } from '@/types/RootState';

enum API {
  signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?',
  loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?',
  webApiKey = 'AIzaSyAwzzcwSDFBIq_Ea8j6zRSL4gyoAQzSTPM',
}

const actions: ActionTree<AuthState, RootState> = {
  async login(context, payload) {
    const response = await fetch(API.loginUrl + `key=${API.webApiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      const error = new Error(data.message || 'Failed to authenticate. Check your login data.');
      throw error;
    }
    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
      tokenExperation: data.expiresIn,
    });
  },
  async signup(context, payload: SignInPayload) {
    const response = await fetch(API.signupUrl + `key=${API.webApiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      const error = new Error(data.message || 'Failed to authenticate. Check your login data.');
      throw error;
    }
    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
      tokenExperation: data.expiresIn,
    });
  },
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExperation: null,
    });
  },
};

export default actions;
