import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER,
  REGISTER_USER,
  USER_ERROR,
  UPDATE_USER,
} from "./constants";
const initialState = {
  user: null,
  authenticated: false,
  error: null,
};
function UserReducer(state, action) {
  switch (action.type) {
    case LOGIN_USER:
    case FETCH_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
    case USER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        authenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export { UserReducer, initialState };
