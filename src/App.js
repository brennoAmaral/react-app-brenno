import React from 'react';
import { Box, styled } from '@material-ui/core';
import Login from './Components/Login';
import './App.css';

function App() {
  const AppStyle = styled(Box)({
    height: '100vh',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'radial-gradient(circle, rgba(255,144,30,1) 0%, rgba(0,29,94,1) 100%)',
  });

  return (
    <AppStyle>
      <Login />
    </AppStyle>
  );
}

export default App;
