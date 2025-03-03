import React from 'react';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notes' element={<Notes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;