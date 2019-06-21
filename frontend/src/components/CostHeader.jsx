import React from "react";
import SplitText from "react-pose-text";
import { Container, Header } from "semantic-ui-react";

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
      <Container>
        <Header as={"h1"}>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            {"Your total is $" + this.props.totalCost.toFixed(2)}
          </SplitText>
          <Header.Subheader>
            <SplitText
              wordPoses={wordPoses}
              pose={this.state.isVisible ? "visible" : "hidden"}
            >
              {"(A subtotal of $" +
                this.props.subTotal.toFixed(2) +
                " + " +
                "$" +
                this.props.taxAmount +
                " Tax)"}
            </SplitText>
          </Header.Subheader>
        </Header>
      </Container>
    );
  }
}

export default CostHeader;
