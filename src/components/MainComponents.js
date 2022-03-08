import React, { Component } from "react";
import Header from './HeaderComponent'
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from 'react-router-dom'

function Main (){
   
    const HomePage = () =>{
        return (
            <Home />
        );
    };
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </div>
    );
}


export default Main;
