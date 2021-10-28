/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { LOADING_OCULTAR, LOADING_EXIBIR } from '../actions/types';

const initialState = {
  showLoading: false,
};

const LoadingReducer = (state = initialState, actions) => {
  let show = state.showLoading;

  switch (actions.type) {
    case LOADING_EXIBIR:
      show = true;
      break;

    case LOADING_OCULTAR:
      show = false;
      break;

    default:
      return state;
  }
  return {
    ...state,
    showLoading: show,
  };
};

export default LoadingReducer;
