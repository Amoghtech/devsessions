
import './App.css';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Workshops from './Pages/Workshops';
import LoginComp from './Pages/Login';
import Registered from './Pages/Registered';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  let routes =
    (<Switch>
      <Route path="/registered">
        <Registered/>
      </Route>
      <Route path="/workshops">
        <Workshops/>
      </Route>
      <Route exact path="/login" >
        <LoginComp/>
      </Route>
      <Route exact path="/" >
        <Home/>
      </Route>
    </Switch>);
  return (
    <Router>
      <Layout>
        {routes}
      </Layout>
    </Router>
  );
}
