import React from "react";
import posed from "react-pose";

const SignUpPose = posed.div({
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
        <form id="signup_form" onSubmit={"dispatch action here"}>
          <input
            type="text"
            maxLength="20"
            placeholder="Username"
            name="username"
          />
          <br />
          <input type="email" name="email" placeholder="Email" />
          <br />
          <input type="" name="sales_tax_rate" placeholder="Sales Tax Rate" />
          <br />
          <input type="text" name="password" placeholder="Password" />
          <br />
          <p>Agree to privacy statement?</p>
          <input type="checkbox" />
        </form>
        <br />
        <button type="submit" form="signup_form">
          Register!
        </button>
      </SignUpPose>
    );
  }
}

export default SignUpForm;
