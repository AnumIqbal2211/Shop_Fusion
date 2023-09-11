import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import "../AdminPanel/styles/Navbar.css";
import { useNavigate } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/signin");
  };

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/signin">
                admin123@gmail.com &nbsp; &nbsp;
                <TbLogout onClick={handleLogout}> </TbLogout>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;