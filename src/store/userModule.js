import ApiService from "../commons/services";
const state = {
  users: [],
  user: {},
  userId: null
};

const getters = {
  getUsers(state) {
    return state.users;
  },
  getCurrentUser(state) {
    return state.user;
  },
  getUserId(state) {
    return state.userId;
  }
};
const mutations = {
  setUsers: (state, users) => {
    state.users = users;
    state.errors = {};
  },
  setUserId: (state, userId) => {
    state.userId = userId;
  }
};

const actions = {
  updateUser(context, payload) {
    return new Promise(resolve => {
      let url = "api/user/" + payload.userId;
      console.log(url);
      ApiService.put(url, payload)
        .then(({ data }) => {
          console.log(data);
          context.commit("setUsers", data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
        });
    });
  },
  fetchUsers(context, payload) {
    return new Promise(resolve => {
      ApiService.query("api/user", payload)
        .then(({ data }) => {
          console.log(data);
          context.commit("setUsers", data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit("setError", response.data.errors);
        });
    });
  }
};

export default { state, actions, mutations, getters };
