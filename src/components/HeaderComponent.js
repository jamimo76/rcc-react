import React, { Component } from "react";
import { Jumbotron, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState ({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Rockingham Commons</h1>
                <h2>A smoke free, condominium community</h2>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar light sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto"href="/">
              <img
                src="..\assets\images\RCCA sign.PNG"
                height="50"
                width="50"
                alt="Rockingham Commons" />
            </NavbarBrand> 
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home"><i className="fa fa-home fa-lg" /> Home </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about"><i className="fa fa-info fa-lg" /> About Us </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact"><i className="fa fa-address-card fa-lg" /> Contact Us </NavLink>
                </NavItem>
              </Nav>
            </Collapse>   
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
