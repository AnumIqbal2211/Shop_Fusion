import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Orders() {
  return (
    <div className="order">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default Orders