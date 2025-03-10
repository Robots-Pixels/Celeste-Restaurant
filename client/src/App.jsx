import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import './App.css'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Reservation from './pages/Reservation.jsx';
import Header from './components/Header.jsx';



function App() {

  return (
    <BrowserRouter>
    
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='/reservation' element={<Reservation/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
