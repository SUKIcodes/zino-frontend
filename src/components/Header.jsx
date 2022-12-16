import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <header>
      <h3>TASK MANAGER</h3>
      <div>
        <Link to="/add">ADD TASK</Link>
      </div>
    </header>
  );
};

export default Header;
