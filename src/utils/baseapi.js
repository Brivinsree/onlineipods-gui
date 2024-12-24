import axios from "axios";
const baseURL = 'http://localhost:8080';

//Create Axios to integrate Service
const headers = { "Content-Type": "application/json" };
const axiosInstance = axios.create({
    baseURL, headers
})

export default axiosInstance;