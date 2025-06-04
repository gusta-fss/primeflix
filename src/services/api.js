import axios from 'axios';

// BASE URL : https://api.themoviedb.org/3/
// URL: https://api.themoviedb.org/3/movie/550?api_key=8e9f13c0f25f87fed81750254cf42933

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
