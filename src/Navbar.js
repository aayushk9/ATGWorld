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
      
      <div className="nav-item social-profile">
        <img src="https://th.bing.com/th/id/OIP.JRy2TZsF9d6lFwaROCaj9wHaFA?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Profile" className="profile-image" />
        
      </div>
    </div>
  );
};

export default Navbar;