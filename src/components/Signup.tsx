import React, { useState } from 'react';
import WORDS_API from '../utils/ApiConfig';
import { AxiosResponse } from 'axios';
import { createHmac } from 'crypto';
  
const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [salt, setSalt] = useState("");

    function updateUsername(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    function updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function updateConfirm(event: React.ChangeEvent<HTMLInputElement>) {
        setConfirm(event.target.value);
    }

    function signup(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        WORDS_API.get("salt").then((response: AxiosResponse) => {
            setSalt(response.data);
        });
        if (password !== confirm) {alert("Passwords don't match"); return; }
        // let hash = createHmac('sha512', salt);
        // hash.update(password);
        // let value = hash.digest('hex');
        WORDS_API.post("signup", {
            username: username,
            email: email,
            salt: salt,
            password: password
        }).then(()=>window.location.href = "login")
        .catch(()=>alert("Error"));
    }
    return (
    <div>
        <form onSubmit={signup}>
            <input type="text" placeholder='Username' onChange={updateUsername} /><br />
            <input type="text" placeholder='Email' onChange={updateEmail} /><br />
            <input type="password" placeholder='Password' onChange={updatePassword} /><br />
            <input type="password" placeholder='Confirm Password' onChange={updateConfirm} /><br />
            <button type="submit">Signup</button>
        </form>
    </div>)
}

export default Signup