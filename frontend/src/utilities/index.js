import axios from 'axios';
import { HOST } from '../constants';

axios.defaults.withCredentials = true;

export const loginUser = async (data) => {
    await axios.post(`${HOST}/api/auth/signin`, data);
}

export const getLoggedInUser = async () => {
    const response = await axios.get(`${HOST}/api/user`);
    return response.status === 200;
}

export const logoutUser = async () => {
    const response = await axios.post(HOST + '/api/auth/signout');
    return response.status === 200;
}

export const registerUser = async (data) => {
    await axios.post(`${HOST}/api/auth/register`, data);
}