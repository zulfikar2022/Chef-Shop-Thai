/* eslint-disable no-unused-vars */
import React from "react";
import "./MainLayout.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
  return (
    <Container className="mt-3">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default MainLayout;
