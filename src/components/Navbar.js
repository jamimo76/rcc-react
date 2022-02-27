import React from "react";
// import {
//   Nav,
//   Navbar,
//   NavbarBrand,
//   NavbarToggler,
//   Collapse,
//   NavItem,
//   Jumbotron,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Form,
//   FormGroup,
//   Input,
//   Label
// } from "reactstrap";
// import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="..\assets\images\RCCA sign.PNG"
          height="50"
          width="50"
          alt="Rockingham Commons"
        />
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About Us</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars size={30} style={{ color: "#f8f8f8" }} />
      </div>
    </div>
  );
};

export default Navbar;
