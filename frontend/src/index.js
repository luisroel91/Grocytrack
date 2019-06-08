import React from "react";
import ReactDOM from "react-dom";
import posed from "react-pose";

import { Provider } from "react-redux";

import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./store/index";

import LandingPage from "./containers/LandingPage";
import LoginPage from "./containers/LoginPage.jsx";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const LoadAnimationPose = posed.div({
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  },
  transition: {
    ease: "linear",
    default: {
      duration: "300"
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <LoadAnimationPose>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </LoadAnimationPose>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
