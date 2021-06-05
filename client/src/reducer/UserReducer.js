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
  isAdmin: false,
  loading: true,
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
        loading: false,
        isAdmin: action.payload.role === "admin",
      };
    case REGISTER_USER:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: action.payload,
        isAdmin: action.payload.role === "admin",
      };
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAdmin: action.payload.role === "admin",
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
