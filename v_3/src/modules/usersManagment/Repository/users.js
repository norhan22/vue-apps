import axios from "./axiosConfig";

const resource = "/user";
export default {
  getUsers() {
    return axios.get(`${resource}`);
  },
  getUser(userId) {
    return axios.get(`${resource}/${userId}`);
  },
  createUser(payload) {
    return axios.post(`${resource}/create`, payload);
  },
  updateuser(id, payload) {
    return axios.put(`${resource}/${id}`, payload);
  },
  deleteUser(id) {
    return axios.delete(`${resource}/${id}`);
  },
};
