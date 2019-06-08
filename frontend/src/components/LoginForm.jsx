import React from "react";
import posed from "react-pose";

const LoginPose = posed.div({
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

class LoginForm extends React.Component {
  state = {
    isVisible: false,
    username: "",
    password: ""
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
        <form id="login_form" onSubmit={"dispatch action here"}>
          <input
            type="text"
            maxLength="20"
            placeholder="Username"
            name="username"
          />
          <br />
          <input type="text" name="password" placeholder="Password" />
        </form>
        <br />
        <button type="submit" form="login _form">
          Register!
        </button>
      </LoginPose>
    );
  }
}

export default LoginForm;
