/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Link,
  Divider,
  IconButton,
  Box,
  Switch,
  Typography,
} from '@material-ui/core';
import {
  Visibility,
  VpnKeyRounded,
  AccountCircle,
  VisibilityOff,
} from '@material-ui/icons';
import {
  LoginCardStyle,
  StyleBtn,
  StyleLink,
  AppStyle,
  StyleInput,
  StyleLabel,
  StyleFormControl,
  StyleSwitchBox,
} from './styles';
import TitleTypography from '../../Components/TitleTypography';
import GftLogo from '../../asset/GftLogo';

export default function Login() {
/** codigo responsável pela validação dos inputs */
  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    // eslint-disable-next-line no-unused-vars
    onSubmit: (values) => {
    },
    validate: (values) => {
      const error = {};
      if (values.user.length === 0 || values.password.length < 7) {
        error.errorMessage = 'email ou senha inválido';
      }
      return error;
    },
    validationSchema: Yup.object({
      user: Yup.string().min(1, 'o nome de usuário precisa ter no minimo 1 caractere ').matches('^[a-zA-Z]+$'),
    }),
    validateOnBlur: false,
    validateOnChange: false,
  });

  /** codigo responsavel por mostrar a senha */
  const [handle, setHandle] = useState({
    showPassword: false,
    type: 'password',
  });

  const showPassword = () => {
    if (handle.showPassword === false) {
      setHandle({
        showPassword: true,
        type: 'text',
      });
    } else if (handle.showPassword === true) {
      setHandle({
        showPassword: false,
        type: 'password',
      });
    }
  };

  return (
    <AppStyle>
      <LoginCardStyle>
        <GftLogo />
        <TitleTypography color="var(--color-primary)">
          Login
        </TitleTypography>

        <Box>
          <StyleFormControl variant="standard" htmlFor="standard-adornment-user">
            <StyleLabel>
              E-mail de login
            </StyleLabel>
            <StyleInput
              id="standard-adornment-user"
              name="user"
              value={formik.values.user}
              label="E-mail de Login"
              onChange={formik.handleChange}
              startAdornment={
                <AccountCircle sx={{ fontSize: 28, color: 'var(--color-primary)', margin: '10px 10px 10px 0px' }} />
              }
            />
          </StyleFormControl>

          <StyleFormControl variant="standard" htmlFor="standard-adornment-password">
            <StyleLabel>
              Password
            </StyleLabel>
            <StyleInput
              id="standard-adornment-password"
              name="password"
              value={formik.values.password}
              type={handle.type}
              label="Senha"
              onChange={formik.handleChange}
              endAdornment={(

                <IconButton onClick={showPassword}>
                  {handle.showPassword ? <VisibilityOff sx={{ color: 'var(--color-primary)' }} /> : <Visibility sx={{ color: 'var(--color-primary)' }} />}
                </IconButton>
              )}
              startAdornment={
                <VpnKeyRounded sx={{ fontSize: 28, color: 'var(--color-primary)', marginRight: '10px' }} />
              }
            />

          </StyleFormControl>
        </Box>
        {formik.errors.errorMessage && formik.errors.errorMessage}

        <StyleSwitchBox>
          <Typography sx={{ color: 'var(--color-primary)' }}>
            Lembrar da senha?
          </Typography>
          <Switch color="warning" />
        </StyleSwitchBox>

        <StyleBtn
          type="submit"
          variant="contained"
          sx={{ margin: '10px 0' }}
          onClick={formik.handleSubmit}
        >
          Entrar
        </StyleBtn>

        <StyleLink>
          <Link
            href="/"
            underline="none"
            sx={{ color: 'var(--color-primary)' }}
          >
            Esqueci minha senha
          </Link>
        </StyleLink>

        <Divider
          variant="middle"
          sx={{ borderColor: 'var(--color-primary)', margin: '20px 7px 0 7px' }}
        />

        <StyleBtn
          variant="contained"
          sx={{ margin: '20px 0  20px 0' }}
        >
          Criar conta
        </StyleBtn>

      </LoginCardStyle>
    </AppStyle>

  );
}
