import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({ query, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          type="text"
          className="search-input"
          placeholder="Enter you search shoes."
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
          <AiFillHeart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
