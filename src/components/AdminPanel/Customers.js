import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Customers() {
  return (
    <div className="customer">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  ); 
}

export default Customers