import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/home/home"




function App() {
  return (

    <div className="App">
        <Navbar />

        <Routes>
            <Route path='/' element={<Home />}  />
        </Routes>

    </div>
  );
}

export default App;
