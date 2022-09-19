import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios'
import { onRequest } from './utils/ApiConfig';
import Signup from './components/Signup';
import Login from './components/Login';
import Game from './components/Game';
import Home from './components/Home';

function App() {
  
  // axios.interceptors.request.use(
  //   function(request:AxiosRequestConfig) {
  //     if (request !== undefined)
  //       request.headers.common.Authorization = sessionStorage.getItem("token");
  //       return request;
  //   },
  //   error => {
  //       return Promise.reject(error);
  //   }
  // );

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
{//          <Route path="/setup" element={<Signup />} />
}
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
