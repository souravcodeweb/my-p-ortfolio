import React from 'react';
import { Link } from 'react-router-dom';
import '../Ui/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Sourav.</Link>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="skills">Skills</Link>
        <Link to="work">Work</Link>
        <Link to="blogs">Blogs</Link>
        <Link to="videos">Videos</Link>
        <Link to="contact">Contact</Link>

      </div>
    </div>
  )
}

export default Navbar