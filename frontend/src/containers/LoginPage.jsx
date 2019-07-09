import React, { useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import SplitText from "react-pose-text";
import { Container, Grid, Header, Icon, Segment } from "semantic-ui-react";

import HeaderLogo from "../components/utils/HeaderLogo";
import LoginForm from "../components/forms/LoginForm.jsx";

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

const LoginPage = () => {
  const [isVisible, setisVisible] = useState("");

  const checkSavedToken = useStoreActions(
    actions => actions.auth.checkSavedToken
  );

  useEffect(() => {
    setisVisible(true);
  }, []);

  useEffect(() => {
    checkSavedToken();
  }, [checkSavedToken]);

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
              pose={isVisible ? "visible" : "hidden"}
            >
              Howdy Stranger
            </SplitText>
            <Header.Subheader>
              <SplitText
                wordPoses={wordPoses}
                pose={isVisible ? "visible" : "hidden"}
              >
                Please Login!
              </SplitText>
            </Header.Subheader>
          </Header>
          <Container align={"center"}>
            <Segment style={{ maxWidth: 400 }}>
              <LoginForm />
            </Segment>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LoginPage;
