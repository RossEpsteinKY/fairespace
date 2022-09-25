import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home/home"
import Profile from "./pages/profile/profile"
import Faires from "./pages/faires/faires"
import Photos from "./pages/photos/photos"
import Groups from "./pages/groups/groups"
import Friends from "./pages/friends/friends"




function App() {
  return (

    <div className="App">
        <Navbar />

        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/profile' element={<Profile />}  />
            <Route path='/faires' element={<Faires />}  />
            <Route path='/photos' element={<Photos />}  />
            <Route path='/groups' element={<Groups />}  />
            <Route path='/friends' element={<Friends />}  />
        </Routes>

    </div>
  );
}

export default App;
