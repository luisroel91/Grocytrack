import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStoreState } from "easy-peasy";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);
  const defaultPage = useStoreState(state => state.userData.defaultPage);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={defaultPage} />
      }
    />
  );
};

export default ProtectedRoute;
