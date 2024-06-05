import axios from "axios"
const http = axios.create({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    baseURL: import.meta.env.VITE_API_URL,

})

export default http