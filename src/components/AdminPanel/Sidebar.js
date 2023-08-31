import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../images/logo_transparent.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillContainer } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { SlSettings } from "react-icons/sl";
import { FaEnvelope } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai"; 
import { AiFillProfile } from "react-icons/ai"; 

const Sidebar = () => (
  <div>
    <div className="logo">
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
    <div className="sidebar">
      <ul>
        <li>
          <p>APPLICATION</p>
        </li>
        <li>
          <Link to="/admindashboard">
            <AiOutlineDashboard />
            &nbsp; Dashboard
          </Link>
        </li>
        <li>
          <Link to="/calender">
            <AiFillContainer />
            &nbsp; Catalog
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <FaUsers />
            &nbsp; Customers
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <FaShoppingCart />
            &nbsp; Orders
          </Link>
        </li>
        <li>
          <Link to="/inbox">
            <FaEnvelope />
            &nbsp; Inbox
          </Link>
        </li>
        <li>
          <Link to="/filemanager">
            <AiFillFileAdd />
            &nbsp; File Manager
          </Link>
        </li>
        <li>
          <Link to="/calender">
            <BiCalendar />
            &nbsp; Calendar
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <SiGoogleanalytics />
            &nbsp; Analytics
          </Link>
        </li>
        <li>
          <Link to="/invoice">
            <AiFillProfile />
            &nbsp; Invoice
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <SlSettings />
            &nbsp; Settings
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Sidebar;
