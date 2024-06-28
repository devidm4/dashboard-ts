import axios from "axios";

const Api = axios.create({
    baseURL: 'https://json-serve-sooty.vercel.app/',
});

export default Api;