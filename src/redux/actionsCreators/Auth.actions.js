import Actions from '../../config/Actions';

export const Login = user => ({
  type: Actions.SIGNIN,
  payload: user
});

export const Logout = () => ({
  type: Actions.SINGOUT
});
