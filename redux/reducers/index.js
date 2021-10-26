import { combineReducers } from 'redux';
import app from './AppReducer';
import loading from './LoadingReducer';

const reducers = combineReducers({
  app,
  loading,
});

export default reducers;
