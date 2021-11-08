import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-primary py-2">
      <nav className="navbar bg-primary navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          React-Redux Contact Book
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
