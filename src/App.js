import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/ContactComponent";
import About from "./components/AboutComponent";
import Home from "./components/HomeComponent";
import Navbar from "./components/Navbar";
import Header from "./components/HeaderComponent";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
