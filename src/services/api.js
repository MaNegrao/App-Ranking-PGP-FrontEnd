import axios from 'axios';

const api = axios.create({
    baseURL: 'https://app-ranking-pgp.herokuapp.com/'
});

export default api;