import React from 'react';
import { useFormik } from 'formik';
import { Link, Divider } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import {
  LoginCardStyle,
  StyleInput,
  StyleBtn,
  StyleLink,
  StyleBoxInput,
  AppStyle,
} from './styles';
import GftLogo from '../GftLogo';

export default function Login() {
  const formik = useFormik({
    initialValues: {
      loginName: '',
      password: '',
    },
    onSubmit: () => { },
    validate: (values) => {
      const error = {};
      if (values.loginName.length === 0) {
        error.loginName = 'E-mail ou senha inválido';
      } else if (values.password.length < 7 && values.loginName.length === 0) {
        error.loginName = 'E-mail ou senha inválido';
      }
      return error;
    },
  });

  return (
    <AppStyle>
      <LoginCardStyle>

        <GftLogo />

        <StyleBoxInput>
          <AccountCircleIcon sx={{ fontSize: 40, color: 'var(--color-primary)' }} />
          <StyleInput id="idLoginName" name="loginName" value={formik.values.loginName} variant="standard" label="E-mail de Login" onChange={formik.handleChange} />
        </StyleBoxInput>
        <StyleBoxInput>
          <VpnKeyRoundedIcon sx={{ fontSize: 40, color: 'var(--color-primary)' }} />
          <StyleInput id="idSenha" name="password" value={formik.values.password} type="password" variant="standard" label="Senha" onChange={formik.handleChange} />
        </StyleBoxInput>
        {formik.errors.loginName && formik.errors.loginName}

        <StyleBtn variant="contained" sx={{ margin: '20px 0  20px 0' }}>
          Entrar
        </StyleBtn>

        <StyleLink>
          <Link href="/" underline="none" sx={{ color: 'var(--color-primary)' }}>
            Esqueci minha senha
          </Link>
        </StyleLink>

        <Divider variant="middle" sx={{ borderColor: 'var(--color-primary)', margin: '20px 7px 0 7px' }} />

        <StyleBtn variant="contained" sx={{ margin: '20px 0  20px 0' }}>
          Criar conta
        </StyleBtn>
      </LoginCardStyle>
    </AppStyle>

  );
}
