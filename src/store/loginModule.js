import ApiService from "../commons/services";
import JwtService from "../commons/jwt-service";
const state = {
  errors: null,
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
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
  purgeAuth: state => {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

const actions = {
  signup(context, payload) {
    return new Promise(resolve => {
      ApiService.post("/api/auth/register", payload)
        .then(({ data }) => {
          context.commit("setAuth", data.accessToken);
          context.commit("setUserId", data.id);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
        });
    });
  },
  login(context, payload) {
    return new Promise(resolve => {
      ApiService.post("/api/auth/login", payload)
        .then(({ data }) => {
          context.commit("setAuth", data.accessToken);
          context.commit("setUserId", data.id);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
        });
    });
  },
  logout(context) {
    context.commit("purgeAuth");
  }
};
export default { state, actions, mutations, getters };
