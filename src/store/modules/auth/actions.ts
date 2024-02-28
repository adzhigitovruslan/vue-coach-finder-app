import { AuthState, SignInPayload } from '@/types/AuthState';
import { ActionTree } from 'vuex';
import { RootState } from '@/types/RootState';

// set to .env
enum API {
  signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=',
  webApiKey = 'AIzaSyAwzzcwSDFBIq_Ea8j6zRSL4gyoAQzSTPM',
}

let timer: number | undefined;

const actions: ActionTree<AuthState, RootState> = {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login',
    });
  },
  async signup(context, payload: SignInPayload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup',
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = API.loginUrl + `${API.webApiKey}`;
    if (mode === 'signup') {
      url = API.signupUrl + `${API.webApiKey}`;
    }
    const response = await fetch(url, {
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

    const expiresIn = +data.expiresIn * 1000;
    // const expiresIn = 5000;
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('tokenExpiration', expirationDate + '');

    timer = setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    context.commit('setUser', {
      token: data.idToken,
      userId: data.localId,
      tokenExperation: data.expiresIn,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');
    let expiresIn;
    if (tokenExpiration) {
      expiresIn = +tokenExpiration - new Date().getTime();
    }

    if (expiresIn && expiresIn < 0) {
      return;
    }

    setTimeout(function () {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');
    clearTimeout(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
    });
  },
  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  },
};

export default actions;
