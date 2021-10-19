import React from 'react';
import { TextField, Box, styled } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

export default function Login() {
  const LoginCardStyle = styled(Box)({
    backgroundColor: 'var(--color-white)',
    padding: '1vh',
    display: 'flex',
    alignItems: 'flex-end',
  });

  const StyleInput = styled(TextField)({
    '& .MuiInput-underline:after': {
      borderBottom: '2px solid var(--color-primary)',
    },
    '& .Mui-focused': {
      color: 'var(--color-primary) !important',
      fontWeight: '900',
    },
    marginLeft: '8px',
    color: 'var(--primary-color)',
    variant: 'standard',
  });

  return (
    <Box>
      <LoginCardStyle>
        <AccountCircleIcon sx={{ fontSize: 40, color: 'var(--color-primary)'}} />
        <StyleInput variant="standard" label="E-mail de Login" id="idLoginName" />
      </LoginCardStyle>
      <LoginCardStyle>
        <VpnKeyRoundedIcon sx={{ fontSize: 40, color: 'var(--color-primary)'}} />
        <StyleInput type="password" variant="standard" label="Senha" id="idSenha" />
      </LoginCardStyle>
    </Box>
  );
}
