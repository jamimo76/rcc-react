import React, { Component } from "react";
import { NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Header className="container">
        <div className="row">
          <div className="col">
            <h1>Rockingham Commons</h1>
            <h2>A smoke free, condominium community</h2>
          </div>
        </div>
      </Header>
    );
  }
}

export default Header;
