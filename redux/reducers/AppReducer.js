/* import { testeActions, testeActions2 } from '../actions/AppActions';

const initialState = {
  teste: false,
};

const AppReducer = (state = initialState, action) => {
  let valorTeste = state.teste;

  switch (action.type) {
    case testeActions:
      valorTeste = true;
      break;
    case testeActions2:
      valorTeste = false;
      break;
    default: return state;
  }
  return { ...state, teste: valorTeste };
};

export default AppReducer;
 */