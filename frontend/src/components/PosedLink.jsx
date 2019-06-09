import React from "react";
import posed from "react-pose";

const LinkPose = posed.a({
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

class PosedLink extends React.Component {
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
      <LinkPose
        href={this.props.href}
        pose={this.state.isVisible ? "visible" : "hidden"}
      >
        {this.props.children}
      </LinkPose>
    );
  }
}

export default PosedLink;
