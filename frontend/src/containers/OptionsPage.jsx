import React from "react";
import { Container, Grid, Header, Icon } from "semantic-ui-react";

import SplitText from "react-pose-text";

import HeaderLogo from "../components/utils/HeaderLogo";
import OptionsForm from "../components/forms/OptionsForm";

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

class OptionsPage extends React.Component {
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
      <Grid
        stretched={true}
        container={true}
        columns={1}
        verticalAlign={"middle"}
        textAlign={"center"}
      >
        <Grid.Row>
          <Grid.Column>
            <HeaderLogo />
            <Header as={"h1"} icon textAlign={"center"}>
              <SplitText
                wordPoses={wordPoses}
                pose={this.state.isVisible ? "visible" : "hidden"}
              >
                You've Got Options
              </SplitText>
              <br />
              <br />
              <Icon loading name={"setting"} />
            </Header>
            <Container fluid text>
              <OptionsForm />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default OptionsPage;
