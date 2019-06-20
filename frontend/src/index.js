import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./store/index";

import LandingPage from "./containers/LandingPage";
import LoginPage from "./containers/LoginPage";
import OnboardingPage from "./containers/OnboardingPage";
import OptionsPage from "./containers/OptionsPage";

import "semantic-ui-css/semantic.min.css";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/welcome" component={OnboardingPage} />
        <Route path="/options" component={OptionsPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
