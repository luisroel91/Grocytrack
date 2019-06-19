import React from "react";
import SplitText from "react-pose-text";

import HeaderLogo from "../components/HeaderLogo";
import OnboardingForm from "../components/OnboardingForm";
import OnboardingIntro from "../components/OnboardingIntro";

class OnboardingPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <OnboardingIntro />
          <OnboardingForm />
        </div>
      </div>
    );
  }
}

export default OnboardingPage;
