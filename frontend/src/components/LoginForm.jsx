import React from "react";
import posed from "react-pose";
import { Button, Checkbox, Form } from "semantic-ui-react";

const LoginPose = posed.div({
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

class LoginForm extends React.Component {
  state = {
    isVisible: false,
    username: "",
    password: "",
    remember_username: false
  };

  componentDidMount() {
    this.setState({
      isVisible: true
    });
  }

  render() {
    return (
      <LoginPose pose={this.state.isVisible ? "visible" : "hidden"}>
        <br />
        <Form widths={"equal"}>
          <Form.Field required>
            <label>Username</label>
            <input
              name="username"
              required={true}
              placeholder={"Enter Username"}
            />
          </Form.Field>
          <Form.Field required>
            <label>Password</label>
            <input
              type={"password"}
              placeholder={"Enter Password"}
              name={"password"}
            />
          </Form.Field>
          <Form.Field control={Checkbox} label={"Remember Username?"} />
        </Form>
      </LoginPose>
    );
  }
}

export default LoginForm;
