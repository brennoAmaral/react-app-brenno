import { LOGIN_REQUEST } from "../actions/types";

const initialState = {
  user: 'teste',
  password: 'teste',
}

const LoginReducer =  (state = initialState, actions) =>{
 
  let login = {
    user: '',
    password: '',
  }

  switch (actions.type){
    case LOGIN_REQUEST:
      login.user = actions.login.user;
      login.password = actions.login.password;
      console.log(login);
      break;  
  }
  return{
    ...state,
    login,
  }
}

export default LoginReducer;
