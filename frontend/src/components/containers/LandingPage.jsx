import React from "react";
import { Container, Grid } from "semantic-ui-react";

import HeaderLogo from "../HeaderLogo.jsx";
import IntroParagraph from "../intros/Intro";
import SignUpForm from "../forms/SignUpForm";
import PosedLink from "../utils/PosedLink.jsx";

class LandingPage extends React.Component {
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
  }
}

export default LandingPage;
