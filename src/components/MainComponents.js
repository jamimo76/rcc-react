import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  const HomePage = () => {
    return <Home />;
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/contact" render={Contact} />
        <Route path="/about" render={About} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
