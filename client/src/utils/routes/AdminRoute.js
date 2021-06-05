import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
function AdminRoute({ component: Component, location, ...rest }) {
  const {
    userState: { authenticated, isAdmin, loading },
  } = useContext(UserContext);

  if (loading) {
    return "Loading...";
  }

  return authenticated && isAdmin ? (
    <Route
      {...rest}
      exact
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: {
          from: location,
        },
      }}
    />
  );
}

export default AdminRoute;
