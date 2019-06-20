import React from "react";
import posed from "react-pose";
import { Button, Checkbox, Form } from "semantic-ui-react";

const SignUpPose = posed.div({
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

class SignUpForm extends React.Component {
  state = {
    isVisible: false,
    username: "",
    email: "",
    sales_tax_rate: "",
    password: "",
    agreed_to_privacy_statement: false
  };

  componentDidMount() {
    this.setState({
      isVisible: true
    });
  }

  render() {
    return (
      <SignUpPose pose={this.state.isVisible ? "visible" : "hidden"}>
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
            <label>Email</label>
            <input name="email" type={"email"} placeholder={"Enter Email"} />
          </Form.Field>
          <Form.Field required>
            <label>Sales Tax Rate</label>
            <input
              name={"sales_tax_rate"}
              type={"number"}
              step={"0.01"}
              min={0}
              placeholder={"Enter Sales Tax Rate"}
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
          <Form.Field
            required
            control={Checkbox}
            label={"Agree to terms and conditions?"}
          />
          <Button type={"submit"}>Submit!</Button>
        </Form>
      </SignUpPose>
    );
  }
}

export default SignUpForm;
