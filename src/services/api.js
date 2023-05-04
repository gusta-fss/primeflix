import axios from 'axios';

// BASE URL : https://api.themoviedb.org/3/
// URL: https://api.themoviedb.org/3/movie/550?api_key=1c2a76cbffe335a09939bf552765e179

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
