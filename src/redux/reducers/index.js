import { combineReducers } from 'redux';
import LoadingReducer from './Loading.reducers';
import AuthReducer from './Auth.reducers';

const reducers = combineReducers({
  Loading: LoadingReducer,
  Auth: AuthReducer
});

export default reducers;
