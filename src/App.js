import React from "react";
import Body from "./components/Body";
import { BrowserRouter, Route } from "react-router-dom";
import Panier from "./components/Panier";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Smartphones from "./components/Smartphones";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/outfit" component={Body} />
      <Route exact path="/Panier" component={Panier} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/singup" component={SignUp} />
      <Route exact path="/smartphones" component={Smartphones} />
    </BrowserRouter>
  );
}

export default App;
