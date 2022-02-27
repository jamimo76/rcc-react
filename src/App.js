import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar light>
          <div className="container">
            <NavbarBrand href="/">Rockingham Commons</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
