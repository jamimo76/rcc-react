import React, { Component } from "react";
import { Jumbotron, Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false, 
      isModalOpen: false
    };
 
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }  

  toggleNav() {
    this.setState ({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(e) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
      this.toggleModal();
      e.preventDefault();
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
              <span className="navbar-text ml-auto">
                <Button outline onCLick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </span>
            </Collapse>   
          </div>
        </Navbar>
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>  
                <Input type="text" id="username" name="username"
                  innerRef={input=>this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>  
                <Input type="password" id="password" name="password"
                  innerRef={input=>this.password = input} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remember"
                    innerRef={input=>this.remember = input} />
                </Label> 
              </FormGroup> 
              <Button type ="submit" value="submit" color = "primary">Login</Button> 
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
