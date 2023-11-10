import axios from 'axios';

const api = axios.create({
    baseURL: 'http://25.46.212.156:3001/'
});

export default api;