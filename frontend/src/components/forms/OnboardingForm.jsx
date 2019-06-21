import React from "react";
import posed from "react-pose";
import { Button, Checkbox, Form } from "semantic-ui-react";

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
        <Form>
          <Form.Field control={Checkbox} label={"Always pick my next choice"} />
          <br />
          <Button.Group size={"large"}>
            <Button type={"submit"}>Start a New List</Button>
            <Button.Or />
            <Button type={"submit"}>View My Lists</Button>
          </Button.Group>
        </Form>
      </OnboardingPose>
    );
  }
}

export default OnBoardingForm;
