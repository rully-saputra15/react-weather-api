import { httpData, utils } from "./index.js";

const apiData = {
  login(username,password){
    const data = new URLSearchParams();
    data.append("data", JSON.stringify({
      username: username,
      password: password
    }))
    return utils.apiHandler(httpData.post("/login", data))
  },
  getAllHistory(username) {
    return utils.apiHandler(httpData.get("/history", {
      params: {
        data: JSON.stringify(username)
      }
    }))
  },
  postNewHistory(username, city, tempC, status) {
    const data = new URLSearchParams();
    data.append("data", JSON.stringify({
      username: username,
      city: city,
      temp_c: tempC,
      status: status
    }));
    return utils.apiHandler(httpData.post("/add-history", data))
  }
}

export default apiData;
