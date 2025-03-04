import React from 'react';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
function App() {


  return (
    <BrowserRouter>
    <AuthProvider>

        <Navbar/>
        <Hero/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;