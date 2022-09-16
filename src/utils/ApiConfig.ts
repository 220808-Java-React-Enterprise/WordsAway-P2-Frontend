import axios from "axios";

const WORDS_API = axios.create({
    baseURL: "http://localhost:8080/wordsaway",
    headers: {
        "Content-type": "application/json"
    }
})

export default WORDS_API;