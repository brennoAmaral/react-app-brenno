import {
  styled,
  Box,
  Typography,
  Button,
  Input,
  FormControl,
  InputLabel,
} from '@material-ui/core';

const WButtonInput = '250px';

export const LoginCardStyle = styled(Box)({
  backgroundColor: 'var(--color-white)',
  borderRadius: '20px',
  textAlign: 'center',
  width: '350px',
});

export const StyleFormControl = styled(FormControl)({
  marginTop: '10px',
});

export const StyleInput = styled(Input)({
  ': after': {
    color: 'var(--color-primary) !important',
    borderBottom: '2px solid var(--color-primary)',
    fontWeight: '900',
  },
  ':hover:not(.Mui-disabled):before': {
    borderBottomColor: 'var(--color-secundary)',
  },
  color: 'var(--color-primary)',
  variant: 'standard',
  width: WButtonInput,
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
    width: WButtonInput,
  },
  width: WButtonInput,
  backgroundColor: 'var(--color-primary)',
  borderRadius: '30px',
});

export const StyleLabel = styled(InputLabel)({
  '&.Mui-focused': {
    color: 'var(--color-primary) !important',
    fontWeight: '500',
  },
});

export const AppStyle = styled(Box)({
  height: '100vh',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  background: 'radial-gradient(circle, rgba(255,144,30,1) 0%, rgba(0,29,94,1) 100%)',
});

export const StyleSwitchBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '10px 0 0 0',
});
