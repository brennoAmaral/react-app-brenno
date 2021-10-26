import { combineReducers } from 'redux';
import app from './AppReducer';
import login from './LoginReducer';
import loading from './LoadingReducer';

const reducers = combineReducers({
  app,
  login,
  loading,
});

export default reducers;
