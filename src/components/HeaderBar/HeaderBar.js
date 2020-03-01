import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import useStyles from './HeaderBar.style';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from '../../config/Routes';
import { Logout } from '../../redux/actionsCreators/Auth.actions';

const HeaderBar = ({ title, user, onSignedOut }) => {
  const classes = useStyles();
  const history = useHistory();

  const SignOut = () => {
    onSignedOut();
    history.push(Routes.default);
  };

  const SignIn = () => {
    history.push(Routes.default);
  };

  const signButton = user ? (
    <Button variant="contained" color="primary" onClick={SignOut}>
      Cerrar sesión
    </Button>
  ) : (
    <Button variant="contained" color="primary" onClick={SignIn}>
      Ingresar
    </Button>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="BugReport"
            onClick={()=> history.push(Routes.default)}
          >
            <BugReportIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {signButton}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapStateToProp = state => {
  const { user } = state.Auth;
  return { user };
};
const mapDispatchToProp = dispatch => {
  return {
    onSignedOut: () => {
      dispatch(Logout());
    }
  };
};
export default withRouter(
  connect(mapStateToProp, mapDispatchToProp)(HeaderBar)
);
