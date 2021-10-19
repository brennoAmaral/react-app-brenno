import {
  styled,
  Box,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';

export const LoginCardStyle = styled(Box)({
  backgroundColor: 'var(--color-white)',
  borderRadius: '20px',
  textAlign: 'center',
  width: '350px',
});

export const StyleBoxInput = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  margin: '10px 40px 10px 40px',
});

export const StyleInput = styled(TextField)({
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

export const StyleLink = styled(Typography)({
  ': hover': {
    color: 'var(--color-secundary) !important',
  },
  textAlign: 'center',
});

export const StyleBtn = styled(Button)({
  ': hover': {
    backgroundColor: 'var(--color-secundary)',
    color: 'var(--color-primary)',
    fontWeight: '1000',
  },
  width: '232px',
  backgroundColor: 'var(--color-primary)',
});

export const AppStyle = styled(Box)({
  height: '100vh',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: 'radial-gradient(circle, rgba(255,144,30,1) 0%, rgba(0,29,94,1) 100%)',
});
