import React from 'react';
import { Link, Divider} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import {
  LoginCardStyle,
  StyleInput,
  StyleBtn,
  StyleLink,
  StyleBoxInput,
} from './styles';
import GftLogo from '../GftLogo';

export default function Login() {
  return (
    <LoginCardStyle>
      <GftLogo />

      <StyleBoxInput>
        <AccountCircleIcon sx={{ fontSize: 40, color: 'var(--color-primary)'}} />
        <StyleInput variant="standard" label="E-mail de Login" id="idLoginName" />
      </StyleBoxInput>

      <StyleBoxInput>
        <VpnKeyRoundedIcon sx={{ fontSize: 40, color: 'var(--color-primary)' }} />
        <StyleInput type="password" variant="standard" label="Senha" id="idSenha" />
      </StyleBoxInput>

      <StyleBtn variant="contained" sx={{margin: '20px 0  20px 0'}}>
        Entrar
      </StyleBtn>

      <StyleLink>
        <Link href="/" underline="none" sx={{color: 'var(--color-primary)'}}>
          Esqueci minha senha
        </Link>
      </StyleLink>

      <Divider variant="middle" sx={{borderColor: 'var(--color-primary)', margin: '20px 7px 0 7px'}} />

      <StyleBtn variant="contained" sx={{margin: '20px 0  20px 0'}}>
        Criar conta
      </StyleBtn>
    </LoginCardStyle>
  );
}
