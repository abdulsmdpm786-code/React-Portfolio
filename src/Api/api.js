import axios from "axios"

const Axios_Api = axios.create(
    {
        baseURL: "http://localhost:5000"
    }
)

export default Axios_Api