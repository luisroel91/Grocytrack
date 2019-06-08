import React from "react";
import SplitText from "react-pose-text";

import HeaderLogo from "../components/HeaderLogo.jsx";
import LoginForm from "../components/LoginForm.jsx";

const wordPoses = {
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
};

class LoginPage extends React.Component {
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
      <React.Fragment>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            Welcome, please login!
          </SplitText>
          <LoginForm />
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
