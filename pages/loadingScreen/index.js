/* eslint-disable no-else-return */
import React from 'react';
import { useSelector } from 'react-redux';
import { Box, styled } from '@material-ui/core';
import Image from 'next/image';
import LoadingAnimation from '../../asset/Loading/LoadingAnimation.gif';
const LoadingScreen = () => {
  const { showLoading } = useSelector((state) => state.loading);
  console.log(showLoading);

  const StyleLoadingBox = styled(Box)({
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    zIndex: '999999999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--color-white)',

  });
  if (showLoading) {
    return (
      <StyleLoadingBox>
        <Image src={LoadingAnimation} alt="animação de uma com colunas gregas surgindo e dentro dela uma moeda com o cifrão desenhado" />
      </StyleLoadingBox>
    );
  } else {
    return null;
  }
};

export default LoadingScreen;
