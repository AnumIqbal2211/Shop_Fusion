import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Catalog() {
  return (
    <div className='catalog'>
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default Catalog