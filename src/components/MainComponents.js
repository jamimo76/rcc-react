import React, { Component } from "react";
import Header from './HeaderComponent'
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from 'react-router-dom'

function Main (){

    render(){
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
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
