import React from "react";
import Router from "react-router";

var Route = Router.Route;
var IndexRoute  = Router.IndexRoute;

import Main  from "../components/Main";
import Search from "../components/Search";
import Saved from "../components/Saved";

module.exports = (
  <Route path="/" component={Main}>
    <Route path="Search" component={Search} />
    <Route path="Saved" component={Saved} />
    
    <IndexRoute component={Search} />
  </Route>
);
