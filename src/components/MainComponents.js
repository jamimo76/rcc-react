import React, { Component } from "react";
import Header from './HeaderComponent'
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
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
                <Route exact path='/about' component={About} />
            </Switch>
            <Footer />
        </div>
    );
}


export default Main;
