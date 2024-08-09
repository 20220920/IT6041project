import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
  
      <img src="/assets/person/6.png" alt="" className="topbarImg" />

    </div>

    <div className="topbarRight">
    <Link to="/login" className="topbarIconItem">Login</Link>
    <Link to="/register" className="topbarIconItem">Register</Link>
</div>

    </div>
    
  )
}