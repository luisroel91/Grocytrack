import React from "react";
import posed from "react-pose";

import logo from "../logo.svg";

const LogoSvg = posed.img({
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

class HeaderLogo extends React.Component {
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
        <LogoSvg
          className={"LogoSVG"}
          pose={this.state.isVisible ? "visible" : "hidden"}
          src={logo}
        />
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default HeaderLogo;
