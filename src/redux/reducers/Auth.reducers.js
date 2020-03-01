import Actions from '../../config/Actions';

const initAuth = {
  isAuthenticated: false,
  user: null
};

const AuthReducers = (state = initAuth, action) => {
  switch (action.type) {
    case Actions.SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case Actions.SINGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

export default AuthReducers;
