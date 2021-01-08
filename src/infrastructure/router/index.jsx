import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import Checkout from "../../pages/checkout";

export function ApplicationRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
