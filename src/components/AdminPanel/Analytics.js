import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Analytics() {
  return (
    <div className="analytics">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default Analytics