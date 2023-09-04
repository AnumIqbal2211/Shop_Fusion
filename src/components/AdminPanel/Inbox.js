import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Inbox() {
  return (
    <div className="inbox">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default Inbox