import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from '../config/Routes';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PublicRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Routes.Home,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  const { isAuthenticated } = state.Auth;
  return { isAuthenticated };
};

export default withRouter(connect(mapStateToProps)(PublicRoute));