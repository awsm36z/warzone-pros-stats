import axios from "axios";
import {CLIENT_ID} from "../config/consts"

let api = axios.create({
    headers:{
        "Client-ID" : `${CLIENT_ID}`
    }
})

export default api;