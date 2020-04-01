import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "./jwt-service";
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "http://localhost:3001";
const ApiService = {
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  query(resource, params) {
    this.setHeader();
    console.log(resource, params);
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    this.setHeader();
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    this.setHeader();
    console.log(resource, params);
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    this.setHeader();
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    this.setHeader();
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    this.setHeader();
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;
