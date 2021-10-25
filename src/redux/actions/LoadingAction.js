/* eslint-disable arrow-body-style */
import { LOADING_EXIBIR, LOADING_OCULTAR } from './types';

export const ShowLoading = () => {
  return {
    type: LOADING_EXIBIR,
  };
};

export const HideLoading = () => {
  return {
    type: LOADING_OCULTAR,
  };
};
