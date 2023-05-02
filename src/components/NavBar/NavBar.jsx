/* eslint-disable no-unused-vars */
import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold">Chef-Shop</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
            
              <Link id="btn-login" to='/login'>Login</Link>
            
       
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
