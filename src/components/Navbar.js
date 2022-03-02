import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
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
        <Nav navbar>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
