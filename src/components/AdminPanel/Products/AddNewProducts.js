import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../styles/Products.css";
import { useNavigate } from "react-router-dom";

function NewProducts() {
  const [productname, setProductName] = useState("");
  const [productquantity, setProductQuantity] = useState("");
  const [productprice, setProductPrice] = useState("");

    const navigate = useNavigate();
    const addnewProduct = () => {
      navigate("/products");
    };

  return (
    <div className="products">
      <div className="navbar-sidebar">
        <Navbar />
        <Sidebar />
      </div>
      <div className="new-product-list">
        <h2>&nbsp;&nbsp;Add New Products</h2>
        <div className="new-products">
          <h3>Basic Information</h3>
          <h5>Name:</h5>
          <input
            type="text"
            placeholder="Enter New Product"
            value={productname}
            onChange={(e) => setProductName(e.target.value)}
          />
          <h5>Quantity:</h5>
          <input
            type="number"
            placeholder="Enter Quantity of the product"
            value={productquantity}
            onChange={(e) => setProductQuantity(e.target.value)}
          />
          <h5>Price:</h5>
          <input
            type="number"
            placeholder="Enter Price of the Product"
            value={productprice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <button onClick={addnewProduct}>Save</button>
        </div>
      </div>
    </div>
  );
}
export default NewProducts;
