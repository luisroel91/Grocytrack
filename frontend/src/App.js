import React from "react";
import { connect } from "react-redux";

import Page from "./containers/Page";
import HeaderLogo from "./components/HeaderLogo";
import IntroParagraph from "./components/Intro";
import SignUpForm from "./components/SignUpForm";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <HeaderLogo>
        <Page
          currentText={
            <div>
              <IntroParagraph />
              <SignUpForm />
            </div>
          }
        ></Page>
      </HeaderLogo>
    );
  }
}

export default App;
