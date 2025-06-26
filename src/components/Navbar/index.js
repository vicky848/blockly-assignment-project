import './index.css'

import {Link} from 'react-router-dom'
import { FaMoon } from 'react-icons/fa6';
import { IoIosSunny } from 'react-icons/io';
import { useState, useEffect } from 'react';


// Navbar and using bootstrap 
const Navbar = () => {

 const [darkMode, setDarkMode] = useState(false);

  // Toggle body class on theme change
  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };



    return(
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
  <div className ="container-fluid d-flex justify-content-between align-item-center">
    <Link className ="navbar-brand" to="/">Vicky Kumar Chowrasia</Link>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse  justify-content-end" id="navbarNav">
      <ul className ="navbar-nav">
        <li className ="nav-item">
         <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className ="nav-item">
           <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className ="nav-item">
          <Link className="nav-link" to="/resume">Resume</Link>
        </li>
        <li className ="nav-item">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
        <li className ="nav-item">
         <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className ="nav-item">
           <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       
      </ul>
       {/* Toggle Theme Button */}
          <button
            className="btn theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {darkMode ? <IoIosSunny size={24} /> : <FaMoon size={20} />}
          </button>
    </div>
  </div>
</nav>
    )
}
export default Navbar