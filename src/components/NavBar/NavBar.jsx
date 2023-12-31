/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Button, Image } from "react-bootstrap";

const NavBar = () => {
  const { user, logoutUser, setUser } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logoutUser().then((res) => {
      setUser(null);
    });
  };
  return (
    <nav className="rounded navbar navbar-expand-lg bg-body-tertiary nav-container-custom">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold">Chef-Shop-Thai</a>
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
   
            {user && <p className="text-white fw-bold mb-0 me-3">{user.displayName}</p>}
            {!user ? (
              <Link className="btn-login " to="/login">
                Login
              </Link>
            ) : (
              <Link onClick={handleLogOut} className="btn-login ">
                Logout
              </Link>
            )}
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
