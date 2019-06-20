import React from "react";
import posed from "react-pose";
import { Grid } from "semantic-ui-react";

const OnboardingPose = posed.div({
  visible: {
    opacity: 1,
    transition: {
      duration: 900,
      ease: "easeIn"
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 900,
      ease: "easeOut"
    }
  }
});

class OnBoardingForm extends React.Component {
  state = {
    isVisible: false
  };

  componentDidMount() {
    this.setState({
      isVisible: true
    });
  }

  render() {
    return (
      <OnboardingPose pose={this.state.isVisible ? "visible" : "hidden"}>
        <form id="oboarding_form" onSubmit={"dispatch action here"}>
          <input type="checkbox" id="defaultflow" name="defaultflow" />
          <label for="defaultflow">Always make my next choice</label>
        </form>
        <br />
        <div>
          <button>Go to my lists</button>
          <br />
          <button>Make a new list</button>
        </div>
      </OnboardingPose>
    );
  }
}

export default OnBoardingForm;
