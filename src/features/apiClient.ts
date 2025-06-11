import axios from "axios";

export interface ApiResult<T> {
    data: T
    message: string
    error: string | null
}

export const ApiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})