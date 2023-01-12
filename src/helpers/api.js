import {http,utils} from "./index.js";

const api = {
    getCurrentWeather(lat,lng){
        const params = `forecast.json?key=5ed282b93d9d43f5b43124316231101&q=${lat},${lng}&aqi=yes`;
        return utils.apiHandler(http.get(params))
    },
    getListCity(city){
        const params = `forecast.json?key=5ed282b93d9d43f5b43124316231101&q=${city}`;
        return utils.apiHandler(http.get(params))
    }
}

export default api;
