import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/demo/demo.css";
import Padlet from "./views/IndexSections/Padlet";
import Map from "./components/Map";
import Index from "./views/Index.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Index {...props} />} />
      <Route exact path="/map">
        <Map/>
      </Route>
      <Route exact path="/padlet">
        <Padlet/>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
