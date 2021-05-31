import { createContext } from "react";

const UserContext = createContext(null);

function UserProvider(props) {
  return <UserContext.Provider>{props.children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
