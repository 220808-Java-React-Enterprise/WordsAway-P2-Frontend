import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios';
import {User} from './lobby/User.type'
import WORDS_API from '../utils/ApiConfig';

const Lobby = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
       //if(users.length === 0){
            WORDS_API.get("test/getAll").then((response: AxiosResponse<User[]>) => {
                console.log(response.data);
                setUsers(response.data);
            });
        //}
    }, []);
    
    return (
        <>
            <div>
                {users.map(user =>
                    <div>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                    </div>
                )}
            </div>
        </>
    )
}
export default Lobby;