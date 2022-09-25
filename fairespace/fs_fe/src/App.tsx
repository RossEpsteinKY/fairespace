import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import Faires from "./pages/faires/faires"




function App() {
  return (

    <div className="App">
        <Navbar />

        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/profile' element={<Profile />}  />
            <Route path='/faires' element={<Faires />}  />
        </Routes>

    </div>
  );
}

export default App;
