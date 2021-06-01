import { createContext, useReducer } from "react";
import { UserReducer, initialState } from "../../reducer/UserReducer";

const UserContext = createContext(null);

function UserProvider(props) {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
