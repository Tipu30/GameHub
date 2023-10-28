import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api/games",
    params: {
        key: "3c867735bfcb4b418c73a7ddbee7a637"
    }
})