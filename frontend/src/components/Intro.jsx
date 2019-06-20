import React from "react";
import SplitText from "react-pose-text";
import { Container, Message, Icon, Divider, Segment } from "semantic-ui-react";

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

class IntroParagraph extends React.Component {
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
      <Container text textAlign={"center"}>
        <Segment raised attached={"top"}>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            Tired of using your phone calculator to keep track of your grocery
            trips?
          </SplitText>
        </Segment>
        <Segment raised attached>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            Tired of pressing the heckin' clear button and not remembering how
            much your cart is worth?
          </SplitText>
        </Segment>
        <Segment raised attached>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            Want to avoid the uncomfortable situation at the register of not
            knowing how much the bill will be?
          </SplitText>
        </Segment>
        <Segment raised attached>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            Want to keep better track of your grocery purchases and food habits
            ?
          </SplitText>
        </Segment>
        <Message positive attached={"bottom"}>
          <Icon name={"heart"} />
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            We feel your pain and made this for you!
          </SplitText>
        </Message>
      </Container>
    );
  }
}

export default IntroParagraph;
