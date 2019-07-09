import React from "react";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { store } from "./statemanagement/store";

import LandingPage from "../src/containers/LandingPage";
import LoginPage from "../src/containers/LoginPage";
import OnboardingPage from "../src/containers/OnboardingPage";
import OptionsPage from "../src/containers/OptionsPage";

import ProtectedRoute from "./components/utils/ProtectedRoute";
import LoginRoute from "./components/utils/LoginRoute";

class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <Router>
          <Switch>
            <LoginRoute exact path="/" component={LandingPage} />
            <LoginRoute path="/login" component={LoginPage} />
            <ProtectedRoute path={"/welcome"} component={OnboardingPage} />
            <ProtectedRoute path="/options" component={OptionsPage} />
            <ProtectedRoute path="/app" component={App} />
          </Switch>
        </Router>
      </StoreProvider>
    );
  }
}

export default App;
