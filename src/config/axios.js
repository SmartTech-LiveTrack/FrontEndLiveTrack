import axios from 'axios';

const baseURL = "https://smarttech-live-track.herokuapp.com/api/v1";
const baseAxios = axios.create({
    baseURL
});

baseAxios.interceptors.response.use(function (response) {
    let { message, data } = response.data;
    if (response.data.status === 'SUCCESS') {
        return { message, data };
    }
    return Promise.reject(new Error(message));
}, function (error) {
    console.log(error);
    return Promise.reject(error);
});

export default baseAxios;