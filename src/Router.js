import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/sign/SignIn/SignIn';
import Home from './pages/Home/Home';
import Otro from './pages/otro/Otro';
import Routes from './config/Routes';
import HeaderBar from './components/HeaderBar/HeaderBar';
import PublicRoute from './components/PublicRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <HeaderBar />
      <header className="App-header">
        <Switch>
          <PublicRoute path={Routes.SignIn}>
            <SignIn />
          </PublicRoute>
          <PrivateRoute path={Routes.Home}>
            <Home />
          </PrivateRoute>
          <PrivateRoute path={Routes.Otro}>
            <Otro />
          </PrivateRoute>
          <PublicRoute path={Routes.default}>
            <SignIn />
          </PublicRoute>
        </Switch>
      </header>
    </BrowserRouter>
  );
};

export default Router;
