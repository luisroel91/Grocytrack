import React, { useEffect } from "react";
import { Container, Grid } from "semantic-ui-react";

import HeaderLogo from "../components/utils/HeaderLogo";
import IntroParagraph from "../intros/Intro";
import SignUpForm from "../components/forms/SignUpForm";
import PosedLink from "../components/utils/PosedLink.jsx";
import { useStoreActions } from "easy-peasy";

const LandingPage = () => {
  const checkSavedToken = useStoreActions(
    actions => actions.auth.checkSavedToken
  );

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
          <Container text>
            <IntroParagraph />
          </Container>
          <Container>
            <br />
            <PosedLink href={"/login"} currentText={"Already signed up?"} />
          </Container>
          <Container fluid text>
            <SignUpForm />
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default LandingPage;
