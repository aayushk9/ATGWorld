import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-item">ATGWorld</div>
      <div className="nav-item search-bar">
        <input type="text" placeholder="Search..." />
        {/* You can add search icon/button here */}
      </div>
      <div className="nav-item social-profile">Aayush</div>
    </div>
  );
};

export default Navbar;