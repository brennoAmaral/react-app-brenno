import React from 'react';
import { Box, styled } from '@material-ui/core';
import './App.css';

function App() {
  const AppStyle = styled(Box)({
    height: '100vh',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(180deg, rgba(255,144,30,1) 0%, rgba(0,29,94,1) 60%, rgba(0,29,94,1) 100%)',
  });

  return (
    <AppStyle>
      teste
    </AppStyle>
  );
}

export default App;
