import axios from "axios";

export const BASE_URL = process.env.REACT_APP_HOST ? `https://${process.env.REACT_APP_HOST}` : 'http://localhost:4040'

export const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `${BASE_URL}/api`
})

export default axiosInstance
