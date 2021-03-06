import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    routines: [],
  },
  mutations: {
    saveUser(state, payload) {
      state.user = payload.user;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user', JSON.stringify(payload.user));
    },
    reloadUser(state, payload) {
      state.user = payload.user;
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  },
});

export default store;
