import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
function AdminRoute({ component: Component, ...rest }) {
  const {
    userState: { authenticated, isAdmin },
  } = useContext(UserContext);

  return authenticated && isAdmin ? (
    <Route
      {...rest}
      exact
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  ) : (
    <Redirect to="/" />
  );
}

export default AdminRoute;
