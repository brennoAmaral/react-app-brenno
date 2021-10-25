import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Routers from './pages';
import LoadingScreen from './pages/LoadingScreen';
import reducers from './redux/reducers';

function App() {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <LoadingScreen />
      <Routers />
    </Provider>
  );
}

export default App;
