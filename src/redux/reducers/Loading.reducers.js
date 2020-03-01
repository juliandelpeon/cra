import Actions from '../../config/Actions';

const initLoading = {
  active: false
};

const LoadingReducers = (state = initLoading, action) => {
  switch (action.type) {
    case Actions.SET_LOADING:
      return {
        ...state,
        active: action.payload
      };
    default:
      return state;
  }
};

export default LoadingReducers;
