import React from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../styles/NewProducts.css";

function NewProducts() {
  return (
    <div className="products">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
      <div className='new-product-list'></div>
    </div>
  );
}
export default NewProducts;