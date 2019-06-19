import React from "react";
import SplitText from "react-pose-text";

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

class OnboardingIntro extends React.Component {
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
      <div>
        <SplitText
          wordPoses={wordPoses}
          pose={this.state.isVisible ? "visible" : "hidden"}
        >
          Welcome!
        </SplitText>
        <br />
        <br />
        <SplitText
          wordPoses={wordPoses}
          pose={this.state.isVisible ? "visible" : "hidden"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          blandit justo. Proin ut vestibulum eros. Aliquam erat volutpat.
          Quisque semper, eros sed scelerisque pellentesque, tellus risus
          volutpat odio, quis feugiat odio nisi nec felis. Donec facilisis velit
          at porttitor cursus. Nam accumsan feugiat ornare. Aenean mattis varius
          tellus, quis vehicula nisi. Ut sed purus nulla. Duis commodo mauris
          sit amet sem vehicula venenatis. Pellentesque et velit ac justo
          dignissim scelerisque. In dictum elit magna, quis molestie elit
          tincidunt at. Morbi eu tincidunt ipsum. Phasellus bibendum sapien eget
          rutrum commodo. Nulla metus diam, venenatis id lacinia sed, facilisis
          eu massa. Aenean ac ante vel lorem ultricies sollicitudin. Nam dapibus
          lorem est, nec iaculis tortor molestie in. Cras sagittis nunc in
          tellus vehicula tincidunt.
        </SplitText>
        <br />
        <br />
        <SplitText
          wordPoses={wordPoses}
          pose={this.state.isVisible ? "visible" : "hidden"}
        >
          What would you like to do?
        </SplitText>
      </div>
    );
  }
}

export default OnboardingIntro;
