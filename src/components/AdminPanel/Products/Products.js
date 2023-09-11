import React from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../styles/Products.css";
import { useNavigate } from "react-router-dom";
import ProductsDataTable from './ProductsDataTable';

function Products() {

  const navigate = useNavigate();

  const addProduct = () => {
    navigate("/addnewproduct");
  };
  return (
    <div className="products">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
      <div className="products-main-area">
        <h2>&nbsp;&nbsp; Products</h2>
        <button onClick={addProduct}>Add New Product</button>
        <div className="products-list">
          <ProductsDataTable />
        </div>
      </div>
    </div>
  );
}
export default Products;