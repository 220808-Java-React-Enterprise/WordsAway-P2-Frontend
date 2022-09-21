import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';
import {User} from './lobby/User.type'
import WORDS_API from '../utils/ApiConfig';

const Lobby = () => {
    const [users, setUsers] = useState<User[]>([]);
    async function getOpponents() {
        await WORDS_API.get("/getOpponents").then((response: AxiosResponse<User[]>) => {
            console.log(response.data);
            setUsers(response.data);
        })
        .catch(() => window.location.href = "/login");
    }
    useEffect(() => {
        getOpponents();
    }, []);
    
    async function startGame(username: string) {
        await WORDS_API.post("makeGame", {
            username: username
        }).then((response)=>{
            alert("Game ID: " + response.data);
            sessionStorage.setItem("game_id", response.data);
            window.location.href = "/game";
        })
        .catch((response)=>alert(response));
    }

    function continueGame(game_id: string){
        alert("Game ID: " + game_id);
        sessionStorage.setItem("game_id", game_id);
        window.location.href = "/game";
    }

    return (
        <>
        <h1>CHOOSE YOUR CHALLENGER!</h1>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>ELO</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {users.map(user =>
                <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.elo}</td>
                    <td>{
                        user.game_id == null ? 
                            <button onClick={() => startGame(user.username)}>Challenge!</button> : 
                            <button onClick={() => continueGame(user.game_id)}>Continue!</button>
                    }</td>
                </tr>
            )}
            </tbody>
        </table>
        </>
    )
}
export default Lobby;