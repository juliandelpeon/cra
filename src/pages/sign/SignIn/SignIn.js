import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  Link as RouteLink,
  useHistory,
  useLocation,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Login } from '../../../redux/actionsCreators/Auth.actions';
import Routes from '../../../config/Routes';
import { blueGrey } from '@material-ui/core/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Web Chota
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ddd',
    padding: '16px',
    borderRadius: '8px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: blueGrey[700]
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(0, 0, 2)
  }
}));

const SignIn = ({ onClick }) => {
  let history = useHistory();
  let location = useLocation();

  const { from } = location.state || { from: { pathname: Routes.Home } };
  const login = () => {
    onClick({
      email: 'test@test.com',
      name: 'julian del peon'
    });
    history.replace(from);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Ingresar
          </Button>
          <Grid item container justify='space-between'>
            <Grid item xs-6>
              <RouteLink to="/Restore">Recuperar contraseña</RouteLink>
            </Grid>
            <Grid item xs-6>
              <RouteLink to="/SignOn">{'Registarse'}</RouteLink>
            </Grid>
          </Grid>
          {/* <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/Restore">
              <Restore />
            </Route>
          </Switch> */}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProp = dispatch => {
  return {
    onClick: user => {
      dispatch(Login(user));
    }
  };
};
export default withRouter(connect(null, mapDispatchToProp)(SignIn));
