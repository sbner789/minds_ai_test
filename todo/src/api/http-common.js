import axios from "axios"

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos?_limit=5",
    headers: {
        "Content-Type" : "application/json"
    }
})