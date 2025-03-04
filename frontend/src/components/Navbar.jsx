import React, { useContext, useState } from 'react';
import { Notebook } from 'lucide-react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav>
        <div className="container navbar-container">
          <a href="/" className="logo">
            <Notebook size={24} />
            <span>NoteKeeper</span>
          </a>
          
          <div className="nav-links">
            <a href="/" className="nav-link active">Home</a>
            <a href="/notes" className="nav-link">My Notes</a>
            <a href="#" className="nav-link">About Us</a>
            {!user ? (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className='nav-link'>Sign Up</Link>
          </>
        ) : (
          <>
            <p>
              Welcome, {user.name}
            </p> 
            <button onClick={logout} className='logout-button'>Logout</button>
          </>
        )}
            
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
