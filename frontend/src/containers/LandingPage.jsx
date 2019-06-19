import React from "react";

import HeaderLogo from "../components/HeaderLogo.jsx";
import IntroParagraph from "../components/Intro";
import SignUpForm from "../components/SignUpForm";
import PosedLink from "../components/PosedLink.jsx";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <IntroParagraph />
          <SignUpForm />
        </div>
        <br />
        <PosedLink href={"/login"} currentText={"Already signed up?"} />
      </div>
    );
  }
}

export default LandingPage;
