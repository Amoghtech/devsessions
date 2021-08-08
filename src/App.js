import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import Layout from './Components/Layout';
import Workshops from './Pages/Workshops';
import LoginComp from './Pages/Login';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WorkshopItem from './Components/WorkshopItem';
import WorkshopForm from './Pages/WorkshopForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Userprofile from './Pages/Userprofile';
export default function App() {
  const auth = useSelector((state) => state.auth);
  let routes;
  if (auth.islogin) {
    routes = (
      <Switch>
        <Route exact path='/profile'>
          <Userprofile />
        </Route>
        <Route exact path='/sessions/all'>
          <Workshops />
        </Route>
        <Route exact path='/sessions/:sessionId'>
          <WorkshopItem />
        </Route>
        <Route exact path='/login'>
          <LoginComp />
        </Route>
        <Route path='/new-session'>
          <WorkshopForm />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path='/sessions/all'>
          <Workshops />
        </Route>
        <Route exact path='/sessions/:sessionId'>
          <WorkshopItem />
        </Route>
        <Route exact path='/login'>
          <LoginComp />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    );
  }
  return (
    <Router>
      <Layout>{routes}</Layout>
    </Router>
  );
}
