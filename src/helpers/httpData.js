import axios from "axios";

const baseURL = import.meta.env.VITE_BE_URL;

const httpData = axios.create({ baseURL })

httpData.interceptors.request.use((axiosConfig) => {
  return {...axiosConfig}
})

httpData.interceptors.response.use(
  (res) => res,
  (error) => {
    const { code } = error.response.data;
    if (code === 500) {
      return Promise.reject(error)
    }
  }
)

export default httpData;
