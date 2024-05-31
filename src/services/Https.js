import axios from "axios";
import { BASE_API } from "../shared/constant/app"

export const Http = axios.create({
    baseURL: BASE_API,
})