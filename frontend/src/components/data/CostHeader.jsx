import React from "react";
import SplitText from "react-pose-text";
import { Container, Header, Message, Segment } from "semantic-ui-react";

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

class CostHeader extends React.Component {
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
      <Container fluid text>
        <Message attached={"top"}>
          <Header as={"h1"}>
            <SplitText
              wordPoses={wordPoses}
              pose={this.state.isVisible ? "visible" : "hidden"}
            >
              {"Your Total $" + this.props.totalCost.toFixed(2)}
            </SplitText>
          </Header>
        </Message>
        <Segment attached>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            {"( A subtotal of $" +
              this.props.subTotal.toFixed(2) +
              " plus " +
              "$" +
              this.props.taxAmount +
              " tax )"}
          </SplitText>
        </Segment>
      </Container>
    );
  }
}

export default CostHeader;
