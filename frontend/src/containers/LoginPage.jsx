import React from "react";
import SplitText from "react-pose-text";
import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Button
} from "semantic-ui-react";

import HeaderLogo from "../components/HeaderLogo.jsx";
import LoginForm from "../components/LoginForm.jsx";

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
            <Header as={"h2"} icon textAlign={"center"}>
              <Icon name={"sign in"} />
              <SplitText
                wordPoses={wordPoses}
                pose={this.state.isVisible ? "visible" : "hidden"}
              >
                Howdy Stranger
              </SplitText>
              <Header.Subheader>
                <SplitText
                  wordPoses={wordPoses}
                  pose={this.state.isVisible ? "visible" : "hidden"}
                >
                  Please Login!
                </SplitText>
              </Header.Subheader>
            </Header>
            <Container align={"center"}>
              <Segment style={{ maxWidth: 500 }}>
                <LoginForm />
              </Segment>
              <Button size="big" type={"submit"}>
                Login!
              </Button>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default LoginPage;
