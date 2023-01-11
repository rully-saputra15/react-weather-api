import axios from "axios";

const utils = {
    async apiHandler(
        request
    ) {
        try {
            return (await request).data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return Promise.reject(error.response?.data)
            }
            throw new Error(error);
        }
    }
}

export default utils