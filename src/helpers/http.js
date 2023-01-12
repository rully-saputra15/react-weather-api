import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const http = axios.create({ baseURL })

http.interceptors.request.use((axiosConfig) => {
    return {...axiosConfig}
})

http.interceptors.response.use(
    (res) => res,
    (error) => {
        const { code } = error.response.data;
        if (code === 500) {
            return Promise.reject(error)
        }
    }
)

export default http;
