import React from 'react'
import Signup from './components/Signup';
import Login from './components/Login';
import Game from './components/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
{//          <Route path="/setup" element={<Signup />} />
}
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
