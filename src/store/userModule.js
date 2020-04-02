import ApiService from "../commons/services";
const state = {
  users: {}
};

const getters = {
  getUsers(state) {
    return state.users;
  }
};
const mutations = {
  setUsers: (state, users) => {
    state.users = users;
    state.errors = {};
  }
};

const actions = {
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
