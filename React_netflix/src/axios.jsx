import axios from "axios"
import { API_BASE } from "./Constants/Constants";
const instance = axios.create({
    baseURL: API_BASE,
});
export default instance;