import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Invoice() {
  return (
    <div className="invoice">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default Invoice