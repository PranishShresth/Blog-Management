import { createContext, useReducer, useEffect } from "react";
import { UserReducer, initialState } from "../../reducer/UserReducer";
import axios from "../../utils/axios";
import { fetchUserSuccess } from "../../actions/actions";
const UserContext = createContext(null);

function UserProvider(props) {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { data, status } = await axios.get("/api/auth/fetchUser");
          if (status === 200) {
            dispatch(fetchUserSuccess(data.user));
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  return (
    <UserContext.Provider value={{ userState: state, userDispatch: dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
