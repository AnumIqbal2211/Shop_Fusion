import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Settings() {
  return (
    <div className="setting">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
    </div>
  );
}

export default Settings