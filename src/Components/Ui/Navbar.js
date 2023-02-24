import React from 'react';
import { Link } from 'react-router-dom';
import '../Ui/Navbar.css';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Sourav.</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="skills">Skills</Link>
        <Link to="work">Work</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="videos">Videos</Link>
        <Link to="contact">Contact</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  )
}

export default Navbar