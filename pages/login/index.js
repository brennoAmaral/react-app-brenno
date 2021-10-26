/* eslint-disable react/jsx-indent */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
  IconButton,
  Box,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  Visibility,
  VpnKeyRounded,
  AccountCircle,
  VisibilityOff,
} from '@material-ui/icons';
/* import * as s from './styles'; */
import {
  LoginCardStyle,
  StyleBtn,
  StyleLink,
  AppStyle,
  StyleInput,
  StyleLabel,
  StyleFormControl,
  StyleFormGroup,
} from './styles';
import TitleTypography from '../../Components/TitleTypography';
import GftLogo from '../../asset/GftLogo';
import { LOADING_EXIBIR, LOADING_OCULTAR, LOGIN_REQUEST } from '../../redux/actions/types';

export default function Login() {

  const chamarRedux = useDispatch();

  /** codigo responsável pela validação dos inputs */
  const validate = Yup.object().shape({
    user: Yup.string().min(1, 'o nome de usuário precisa ter no minimo 1 caractere ').matches('[a-zA-Z]+?', 'o nome de login é composto apenas por letras').required('campo requerido'),
    password: Yup.string().min(7, 'a senha deve possuir no minimo 7 numeros').matches('[0-9]+?', 'a senha é composta apenas por numeros').required('campo requerido'),
  });
  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    // eslint-disable-next-line no-unused-vars
    onSubmit: (values) => {
      chamarRedux({type: LOGIN_REQUEST, login:{
        user: values.user,
        password: values.password,
      }});
      console.log();
      chamarRedux({ type: LOADING_EXIBIR });
      setTimeout(() => {
        chamarRedux({ type: LOADING_OCULTAR })
      }, 5000);
    },
    validationSchema: validate,
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
              onBlur={formik.handleChange}
              startAdornment={
                <AccountCircle sx={{ fontSize: 28, color: 'var(--color-primary)', margin: '10px 10px 10px 0px' }} />
              }
            />
          </StyleFormControl>

          <Box>
            {formik.errors.user && formik.errors.user}
          </Box>

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
              onBlur={formik.handleChange}
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

        <Box>
          {formik.errors.password && formik.errors.password}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <StyleFormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="lembrar senha" />
          </StyleFormGroup>
          <Box />
        </Box>
        <StyleBtn
          disabled={!formik.dirty || !formik.isValid}
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

      </LoginCardStyle>
    </AppStyle>

  );
}
