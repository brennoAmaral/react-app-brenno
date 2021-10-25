/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { LOADING_OCULTAR, LOADING_EXIBIR } from '../actions/types';

const initialState = {
  showLoading: false,
};

const LoginReducer = (state = initialState, actions) => {
  console.log(actions);
  let show = false;

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

export default LoginReducer;
