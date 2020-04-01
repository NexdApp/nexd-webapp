import ApiService from "../commons/services";
import JwtService from "../commons/jwt-service";
console.log(JwtService.getToken());
const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};
const mutations = {
  setAuth: (state, accessToken) => {
    state.isAuthenticated = true;
    state.errors = {};
    JwtService.saveToken(accessToken);
  },
  setError: (state, error) => {
    state.errors = error;
  },
  PURGE_AUTH: state => {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

const actions = {
  login(context, payload) {
    return new Promise(resolve => {
      ApiService.post("/api/auth/login", payload)
        .then(({ data }) => {
          context.commit("setAuth", data.accessToken);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
        });
    });
  }
};
export default { state, actions, mutations, getters };
