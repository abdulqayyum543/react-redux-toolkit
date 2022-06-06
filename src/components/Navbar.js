import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <div className="navbar">
        <span className="logo">REDUX STORE</span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
        </div>
        <span className="count">Cart Items: {items.length}</span>
      </div>
    </>
  );
};

export default Navbar;
