import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Details from './features/details/Details';
import Navbar from './features/navBar/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
