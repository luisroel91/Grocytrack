import React from "react";
import posed from "react-pose";

const LinkPose = posed.a({
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
