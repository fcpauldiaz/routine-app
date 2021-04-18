import axios from 'axios';

const base_url = process.env.VUE_APP_BASE_URL;

export default {
  register(body) {
    return axios.post(`${base_url}/auth/register`, body);
  },
  login(body) {
    return axios.post(`${base_url}/auth/login`, body);
  },
  saveRoutine(routine) {
    return axios.post(`${base_url}/routine`, routine, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  },
  getRoutines() {
    return axios.get(`${base_url}/routine`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  },
  deleteRoutine(routineId) {
    return axios.delete(`${base_url}/routine/${routineId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
};
