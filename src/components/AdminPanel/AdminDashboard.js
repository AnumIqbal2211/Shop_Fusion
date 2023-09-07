import React from 'react';
import Navbar from "./Navbar"; 
import Sidebar from './Sidebar';
import "../AdminPanel/styles/AdminDashboard.css";
import { TbArrowUpRight } from "react-icons/tb";
import { TbArrowDownRight } from "react-icons/tb";

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
      <div className="main-area">
        <h2>&nbsp; Dashboard</h2>
        <div className="total-sells">
          <h5>Total Sells</h5>
          <h1>$3799.00</h1>
          <h4>
            <TbArrowUpRight />
            34.7%
          </h4>
          <p>Compared to April 2022</p>
        </div>
        <div className="average-order-value">
          <h5>Average Order Value</h5>
          <h1>$272.98</h1>
          <h4>
            <TbArrowDownRight />
            12.0%
          </h4>
          <p>Compared to April 2022</p>
        </div>
        <div className="total-orders">
          <h5>Total Orders</h5>
          <h1>578</h1>
          <h4>
            <TbArrowUpRight />
            34.7%
          </h4>
          <p>Compared to April 2022</p>
        </div>
        <div className="active-users">
          <h5>Active Users</h5>
          <h1>578</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;