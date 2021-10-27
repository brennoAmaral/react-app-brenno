import { combineReducers, createStore } from 'redux';
import app from './AppReducer';
import login from './LoginReducer';
import loading from './LoadingReducer';
/* import { composeWithDevTools } from 'redux-devtools-extension';


const makeStore = () => {
  const store = createStore(app, login, loading, composeWithDevTools());
  return store
};

export const storeWrapper = createWrapper(makeStore, { debug: false }); */
const reducers = combineReducers({
  app,
  login,
  loading,
});

export default reducers;
