import React from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../styles/Products.css";
import { useNavigate } from "react-router-dom";

function Products() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/addnewproduct");
  };
  return (
    <div className="products">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
      <div className="products-main-area">
        <h2>&nbsp; Products</h2>
        <button onClick={handleLogout}>New Product</button>
        <div className="products-list"></div>
      </div>
    </div>
  );
}
export default Products;