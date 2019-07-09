import React, { useState, useEffect } from "react";
import posed from "react-pose";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useStoreActions, useStoreState } from "easy-peasy";

const OnboardingPose = posed.div({
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
});

const OnBoardingForm = () => {
  const [isVisible, setisVisible] = useState("");

  useEffect(() => setisVisible(true), []);

  return (
    <OnboardingPose pose={isVisible ? "visible" : "hidden"}>
      <Form>
        <Form.Field control={Checkbox} label={"Always pick my next choice"} />
      </Form>
      <br />
      <Button.Group size={"massive"} compact>
        <Button type={"submit"} content={"New List"} />
        <Button.Or />
        <Button type={"submit"} content={"View List"} />
      </Button.Group>
    </OnboardingPose>
  );
};
export default OnBoardingForm;
