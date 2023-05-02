/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { Container } from "react-bootstrap";
import chefImage from "../../assets/chefCockingEdited.png";
const Header = () => {
  return (
    <div className="main-header rounded">
      <NavBar></NavBar>
      <div className="container mt-5 banner-container">
        <div className="container">
          <p className="banner-header">
            Fresh Food <br></br> and Great Test
          </p>
          <p className="banner-description">
            Welcome to <span>Chef-Shop</span> , where we believe that dining out
            should be an experience to remember. We take pride in serving our
            guests the very best in culinary delights, using only the freshest
            and finest ingredients available. Our menu is carefully curated to
            offer a diverse range of dishes, each prepared with the utmost care
            and attention to detail. From the moment you step inside, you'll be
            transported to a world of sophistication and luxury, where every
            detail has been thoughtfully designed to enhance your dining
            experience. So come and join us, and let us take you on a journey of
            culinary delight that you'll never forget.
          </p>
          <button className="header-button">See More About us</button>
        </div>
        <div className="container">
          <img className="chef-image" src={chefImage} />
        </div>
      </div>
    </div>
  );
};

export default Header;
