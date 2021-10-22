import { Typography, styled } from '@material-ui/core';
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function TitleTypography({ children, variant = 'h1', ...rest}) {
  const H1Tyohography = styled(Typography)({
    '&.MuiTypography-h1': {
      fontSize: '3em',
      fontWeight: 1000,
    },
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <H1Tyohography {...rest} variant={variant}>
      {children}
    </H1Tyohography>
  );
}
