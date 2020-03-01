import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Logout } from '../../redux/actionsCreators/Auth.actions';
import { Typography, Button, Container } from '@material-ui/core';
import Routes from '../../config/Routes';
import useStyles from './Home.style';

const Home = ({ onClick, name }) => {
  let history = useHistory();
  const classes = useStyles();

  const SignOut = () => {
    onClick();
    history.push(Routes.default);
  };
  return (
    <div className={classes.root}>
      <Container>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => history.push(Routes.Otro)}
        >
          ir a otro lado
        </Button>
        <Typography component="h1" variant="h5">
          Bienvenido, {name}
        </Typography>
      </Container>
    </div>
  );
};

const mapStateToProop = state => {
  const { user } = state.Auth;
  return { name: user.name };
};
const mapDispatchToProp = dispatch => {
  return {
    onClick: () => {
      dispatch(Logout());
    }
  };
};

export default withRouter(connect(mapStateToProop, mapDispatchToProp)(Home));
