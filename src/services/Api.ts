import axios from "axios";

const Api = axios.create({
    baseURL: 'https://site-pessoal-api-5r8b.onrender.com/api',
});

export default Api;