import { LOGIN_REQUEST } from "./types";

const LoginRequest = (user, password) => {
  return {
    type: LOGIN_REQUEST,
    login: {
      user: user,
      password: password,
    }
  }
}
export default LoginRequest;