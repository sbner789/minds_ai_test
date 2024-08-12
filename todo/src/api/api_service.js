import http from "./http-common"

const getData = () => {
    return http.get("/")
}

const CommonApiService = {
    getData
}

export default CommonApiService;