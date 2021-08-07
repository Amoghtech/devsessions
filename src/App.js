import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Workshops from './Pages/Workshops';
import LoginComp from './Pages/Login';
import Registered from './Pages/Registered';
import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkshopItem from './Components/WorkshopItem';
import WorkshopForm from './Pages/WorkshopForm'
import { useSelector } from 'react-redux';
export default function App() {




  let routes = (
    <Switch>
      <Route path='/registered'>
        <Registered />
      </Route>
      <Route exact path='/sessions/all'>
        <Workshops />
      </Route>
      <Route path='/sessions/:sessionId'>
        <WorkshopItem />
      </Route>
      <Route exact path='/login'>
        <LoginComp />
      </Route>
      <Route path="/new-session">
        <WorkshopForm/>
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
  return (
    <Router>
      <Layout>{routes}</Layout>
    </Router>
  );
}
