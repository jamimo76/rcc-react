import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap'

function Main() {
    return (
        <div>
            <Navbar light sticky="top">
                <div className="container">
                    <NavbarBrand href="/">Rockingham Commons</NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
}


export default Main;
