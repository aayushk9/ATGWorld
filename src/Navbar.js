import React from 'react';
import './styles/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item"><strong>ATGWorld</strong></div>
      <div className="nav-item search-bar">
        <input type="text" placeholder="Search for your favorite groups in ATG" />
      </div>
      
      <div className="nav-item social-profile">
        <button className='create-btn'>Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;