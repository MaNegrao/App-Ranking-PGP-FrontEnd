import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-ranking-pgp.herokuapp.com/api/'
});

export default api;