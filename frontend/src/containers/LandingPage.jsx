import React from "react";

import HeaderLogo from "../components/HeaderLogo.jsx";
import IntroParagraph from "../components/Intro";
import SignUpForm from "../components/SignUpForm";
import PosedLink from "../components/PosedLink.jsx";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <IntroParagraph />
          <SignUpForm />
        </div>
        <div>
          <PosedLink href={"/login"}>Signed up? Login here</PosedLink>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
