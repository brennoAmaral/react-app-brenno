import { LOGIN_REQUEST } from "./types";

const LOGIN_REQUEST = () => {
  return {
    type: LOGIN_REQUEST,
    login: {
      user: '',
      password: '',
    }
  }
}
export default LOGIN_REQUEST;