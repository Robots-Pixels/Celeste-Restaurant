import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Reservation from './pages/Reservation.jsx';
import Header from './components/Header.jsx';
import Menu from './pages/Menu.jsx';
import Gallery from './pages/Gallery.jsx';

function App() {
      
  return (
    <BrowserRouter>
    
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
