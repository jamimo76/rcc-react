import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
//  return <Home/>
/*   const HomePage = () => {
    return <Home />;
  }; */
/*   return (
    <div>
      <Header />
      <Switch>
        <Route path="/"/>
        <Route path="/contact" render={() => <div>Contact</div>} />
        <Route path="/about" render={() => <div>About</div>} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  ); */

   return (
     <div>
        <Header />
        <hr />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Redirect to="/" /> 
        </Switch>
        <Footer />
     </div>
    );
}

export default Main;
