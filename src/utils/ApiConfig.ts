import axios, { AxiosRequestConfig } from "axios";

const WORDS_API = axios.create({
    baseURL: "http://localhost:8080/wordsaway",
    headers: {
        "Content-type": "application/json"
    }
})

export const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    let token = sessionStorage.getItem("token")
    alert(token);
    if (config !== undefined && config.headers !== undefined && token !== null) {
        config.headers['Authentication'] = token;
    }
    return config;
}

export default WORDS_API;