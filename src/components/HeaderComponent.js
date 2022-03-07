import React, { Component } from "react";
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  

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

        <Navbar light sticky="top">
          <div className="container">
            <NavbarBrand href="/">Rockingham Commons</NavbarBrand>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
