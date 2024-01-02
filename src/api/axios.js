import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key : 'bc29c5a89e2ee802ee94c83aaed90d96',
        language:"ko-KR"
    }
})

export default instance