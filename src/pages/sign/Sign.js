import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from '../../config/Routes';

const Sign = ({ isAuthenticated }) => {
  let history = useHistory();
  let location = useLocation();
  const { from } = location.state || { from: { pathname: Routes.Home } };
  if (isAuthenticated) {
    history.push(from);
  } else {
    history.push(Routes.SignIn);
  }
  return null;
};

const mapStateToProp = state => {
  const { isAuthenticated } = state.Auth;
  return { isAuthenticated };
};

export default (connect(mapStateToProp)(Sign));
