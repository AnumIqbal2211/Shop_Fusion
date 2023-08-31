import React from 'react';
import Navbar from "./Navbar"; 
import Sidebar from './Sidebar';
import "../AdminPanel/AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="adminpanel">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
      <div className="main-area">
        <h1>Welcome to Admin Panel</h1>
      </div>
    </div>
  );
}

export default AdminDashboard;