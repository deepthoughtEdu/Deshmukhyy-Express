import axios from 'axios';
import { HOST } from '../constants';

axios.defaults.withCredentials = true;

export const loginUser = async (data) => {
    await axios.post(`${HOST}/api/auth/signin`, data);
}

export const getLoggedInUser = async () => {
    const response = await axios.get(`${HOST}/api/user`);
    return response.data && response.data.response;
}

export const logoutUser = async () => {
    const response = await axios.post(HOST + '/api/auth/signout');
    return response.status === 200;
}

export const registerUser = async (data) => {
    await axios.post(`${HOST}/api/auth/register`, data);
}

export const loadRequests = async (status) => {
    let url = HOST + '/api/app'; 
    if (status) {
        url += ('?status=' + status);
    }
    const response = await axios.get(url);
    return response.data && response.data.response;
}

export const createRequest = async (data) => {}

export const updateRequestStatus = async (status, id) => {
    if (!status || !id) {
        throw new Error('Both status and id are required parameters.');
    }
    await axios.put(`${HOST}/api/app/${id}`, {status});
}

export const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }