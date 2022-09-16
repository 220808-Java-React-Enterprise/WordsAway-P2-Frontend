import React, { useState } from 'react';
import WORDS_API from '../utils/ApiConfig';
import { AxiosResponse } from 'axios';
  
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [salt, setSalt] = useState("");

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function signup(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        WORDS_API.get("salt").then((response: AxiosResponse) => {
            setSalt(response.data);
        });
        // let hash = createHmac('sha512', salt);
        // hash.update(password);
        // let value = hash.digest('hex');
        WORDS_API.post("login", {
            username: username,
            password: password
        }, {
            headers: {'Access-Control-Expose-Headers': 'Authoriziation'}
        }).then((response)=>{
            alert(Object.keys(response.headers));
//            sessionStorage.setItem("token", response.headers);
            //window.location.href = "game";
        })
        .catch((response)=>alert(response));
    }
    return (
    <div>
        <form onSubmit={signup}>
            <input type="text" placeholder='Username' onChange={updateUsername} /><br />
            <input type="password" placeholder='Password' onChange={updatePassword} /><br />
            <button type="submit">Login</button>
        </form>
    </div>)
}

export default Login