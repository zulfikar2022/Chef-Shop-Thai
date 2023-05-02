/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="footer-container mb-3">
      <div className="w-50 text-center mt-5">
        <FaClock />
        <p className="opening-hours">OPENING HOURS</p>
        <div className="d-flex justify-content-between">
          <p>Monday-Friday</p>
          <p>8.00-16.00</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Saturday</p>
          <p>10.00-15.00</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Sunday</p>
          <p>10.00-15.00</p>
        </div>
      </div>
      <div className="text-center w-50 mt-5">
        <div className="flex flex-column">
          <FaMapMarkerAlt></FaMapMarkerAlt>
          <p>
            9732 Para street, <br /> AmbujaLand,3786
          </p>
        </div>
        <div className="flex flex-column">
            <FaPhone></FaPhone>
            <p>+124567890</p>
        </div>
        <div className="flex flex-column">
            <FaEnvelope></FaEnvelope>
            <p>chef-shop@gmial.com</p>
        </div>

      </div>
    </Container>
  );
};

export default Footer;
