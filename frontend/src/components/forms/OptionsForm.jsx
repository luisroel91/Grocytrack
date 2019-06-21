import React from "react";
import posed from "react-pose";
import { Button, Container, Form } from "semantic-ui-react";

import SplitText from "react-pose-text";

const OptionsPose = posed.div({
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

const wordPoses = {
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
};

class OptionsForm extends React.Component {
  state = {
    isVisible: false,
    skipToLists: false,
    skipToNewList: true,
    currentPassword: null,
    newPassword: null,
    newUsername: null
  };

  componentDidMount() {
    this.setState({
      isVisible: true
    });
  }

  render() {
    return (
      <OptionsPose pose={this.state.isVisible ? "visible" : "hidden"}>
        <br />
        <Form widths={"equal"} textAlign={"center"}>
          <Form.Radio
            size={"huge"}
            slider
            label={"Go to a New List on Startup"}
          />
          <Form.Radio
            size={"huge"}
            slider
            label={"Go to My Lists on Startup"}
          />
          <Container as={"h1"} text>
            <SplitText
              wordPoses={wordPoses}
              pose={this.state.isVisible ? "visible" : "hidden"}
            >
              Want to change your username/password?
            </SplitText>
            <br />
            <br />
            <SplitText
              wordPoses={wordPoses}
              pose={this.state.isVisible ? "visible" : "hidden"}
            >
              Enter your current password and then fill either or both fields
            </SplitText>
          </Container>
          <br />
          <Form.Field required>
            <label>Current Password</label>
            <input
              type={"password"}
              placeholder={"Current Password"}
              name={"current_password"}
            />
          </Form.Field>
          <Form.Field>
            <label>New Password</label>
            <input
              type={"password"}
              placeholder={"New Password"}
              name={"new_password"}
            />
          </Form.Field>
          <Container as={"h1"} text>
            <SplitText
              wordPoses={wordPoses}
              pose={this.state.isVisible ? "visible" : "hidden"}
            >
              And/Or
            </SplitText>
          </Container>

          <Form.Field>
            <label>New Username</label>
            <input placeholder={"New Username"} name={"new_username"} />
          </Form.Field>
          <br />
          <Form.Button size={"huge"} type={"submit"}>
            <label>Confirm</label>
          </Form.Button>
        </Form>
      </OptionsPose>
    );
  }
}

export default OptionsForm;
