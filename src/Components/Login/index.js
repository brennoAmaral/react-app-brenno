import React from 'react';
import { TextField, Box, styled } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Login() {
  const LoginCardStyle = styled(Box)({
    backgroundColor: 'var(--color-white)',
    padding: '10vh',
    display: 'flex',
    alignItems: 'flex-end',
  });

  const StyleInput = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottom: '2px solid var(--color-primary)',
    },
    '& .Mui-focused': {
      color: 'var(--color-primary)',
    },
    marginLeft: '8px',
    color: 'var(--primary-color)',
    variant: 'standard',
  });

  return (
    <LoginCardStyle>
      <AccountCircleIcon sx={{ fontSize: 30, margineft: '8px', color: 'var(--color-primary)'}} />
      <StyleInput variant="standard" label="Login Name" id="idLoginName" />
    </LoginCardStyle>

  );
}
