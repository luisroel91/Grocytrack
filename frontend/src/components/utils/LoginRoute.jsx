import { useStoreState } from "easy-peasy";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const LoginRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useStoreState(state => state.auth.isLoggedIn);
  const defaultPage = useStoreState(state => state.userData.defaultPage);

  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn) {
          return <Redirect to={defaultPage} />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

export default LoginRoute;
