import React, { useEffect, useState } from "react";
import { Container, Grid, Header, Icon } from "semantic-ui-react";
import { useStoreActions } from "easy-peasy";

import SplitText from "react-pose-text";

import HeaderLogo from "../components/utils/HeaderLogo";
import OnboardingForm from "../components/forms/OnboardingForm";
import OnboardingIntro from "../intros/OnboardingIntro";
import PosedLink from "../components/utils/PosedLink";

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

const OnboardingPage = () => {
  const [isVisible, setisVisible] = useState("");

  const revokeToken = useStoreActions(actions => actions.auth.revokeToken);

  const checkToken = useStoreActions(actions => actions.auth.checkSavedToken);

  useEffect(() => {
    setisVisible(true);
  }, []);

  useEffect(() => {
    checkToken();
  }, [checkToken]);

  return (
    <Grid stretched={true} container={true} columns={1} textAlign={"center"}>
      <Grid.Row>
        <Grid.Column>
          <HeaderLogo />

          <Header as={"h1"} icon>
            <SplitText
              wordPoses={wordPoses}
              pose={isVisible ? "visible" : "hidden"}
            >
              Welcome!
            </SplitText>
            <br />
            <br />
            <Icon loading name={"star"} />
          </Header>
          <br />
          <Container>
            <OnboardingIntro />
          </Container>
          <Container>
            <OnboardingForm />
          </Container>
          <br />
          <Container verticalAlign={"middle"}>
            <PosedLink
              href={"#"}
              currentText={"Logout"}
              onClick={() => revokeToken()}
            />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default OnboardingPage;
