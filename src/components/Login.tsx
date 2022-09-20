import React, { useState } from 'react';
import WORDS_API from '../utils/ApiConfig';
import axios, { AxiosResponse } from 'axios';
import CryptoJS from 'crypto-js';
  
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    async function login(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let salt = "";
        await WORDS_API.get("salt", {params: {username: username}}).then((response: AxiosResponse) => {
            salt = response.data;
        });
        let hash = CryptoJS.HmacSHA512(password, salt).toString();
        WORDS_API.post("login", {
            username: username,
            password: hash
        }).then((response)=>{
            alert(response.headers.authorization);
            sessionStorage.setItem("token", response.headers.authorization);
            axios.defaults.headers.common.Authorization = response.headers.authorization;
            window.location.href = "/";
        })
        .catch((response)=>alert(response));
    }
    return (
    <div>
        <form onSubmit={login}>
            <input type="text" placeholder='Username' onChange={updateUsername} /><br />
            <input type="password" placeholder='Password' onChange={updatePassword} /><br />
            <button type="submit">Login</button>
        </form>
    </div>)
}

export default Login