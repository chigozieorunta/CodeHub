import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home/";
import Login from "./pages/Login/Login";
import "../src/styles/App.css";

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Switch>
    </Router>
  );
};

export default App;
