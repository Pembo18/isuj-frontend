import axios from "axios";

const api = axios.create({
    baseURL: "https://kwikweb.live/api/products"
})

export default api;