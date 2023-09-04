import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Calender() {
  return (
    <div className="calender">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default Calender