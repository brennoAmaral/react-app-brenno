import { LOGIN_REQUEST } from "../actions/types";

const initialState = {
  user: '',
  password: '',
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
  }
  return{
    ...state,
    login,
  }
}

export default LoginReducer;
