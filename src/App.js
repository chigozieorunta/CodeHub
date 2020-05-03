import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "./pages/Home/";
import Courses from "./pages/Courses/";
import Login from "./pages/Login/Login";

import "../src/assets/fonts/circular-pro/style.css";
import "../src/styles/App.css";
import "../src/styles/BootStrap-Spacer.min.css";

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/courses" exact component={Courses}></Route>
      </Switch>
    </Router>
  );
};

export default App;
