import Vue from "vue";
import Vuex from "vuex";
import loginModule from "./loginModule";
import userModule from "./userModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loginModule,
    userModule
  }
});
