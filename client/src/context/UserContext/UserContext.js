import { createContext, useReducer, useEffect } from "react";
import { UserReducer, initialState } from "../../reducer/UserReducer";
import { useHistory } from "react-router-dom";
import axios from "../../utils/axios";
import { fetchUserSuccess } from "../../actions/actions";
const UserContext = createContext(null);

function UserProvider(props) {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const history = useHistory();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const { data, status } = await axios.get("/api/auth/fetchUser");
          if (status === 200) {
            dispatch(fetchUserSuccess(data.user));
            // console.log(history);
            // console.log(props.location);
            // history.push("/admin/addPost");
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
