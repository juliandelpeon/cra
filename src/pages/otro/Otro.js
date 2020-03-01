import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../../redux/actionsCreators/Auth.actions';
import { Typography, Button } from '@material-ui/core';
import Routes from '../../config/Routes';

const Otro = ({ onClick }) => {
  let history = useHistory();

  const SignOut = () => {
    onClick();
    history.push(Routes.default);
  };
  return (
    <div>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={SignOut}
      >
        salir
      </Button>
      <Typography component="h1" variant="h5">
      Otro
      </Typography>
    </div>
  );
};

const mapDispatchToProp = dispatch => {
  return {
    onClick: () => {
      dispatch(Logout());
    }
  };
};

export default withRouter(connect(null, mapDispatchToProp)(Otro));
