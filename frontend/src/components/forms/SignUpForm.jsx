import React, { useState, useEffect } from "react";
import posed from "react-pose";
import { Button, Form, Popup, Message } from "semantic-ui-react";
import { useStoreActions, useStoreState } from "easy-peasy";

const SignUpPose = posed.div({
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

const SignUpForm = () => {
  // Pose prop
  const [isVisible, setisVisible] = useState("");
  // Local state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [salesTaxRate, setSalesTaxRate] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState("");

  const formSuccess = useStoreState(
    state => state.userRegistration.registrationSuccess
  );
  const formError = useStoreState(
    state => state.userRegistration.registrationError
  );

  const postNewUser = useStoreActions(
    actions => actions.userRegistration.postNewUser
  );

  const handleChangeUsername = event => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmail(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleChangeSalesTaxRate = event => {
    setSalesTaxRate(event.target.value);
  };

  const handleChangeAgreeToTerms = data => {
    setAgreeToTerms(data);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Assemble object
    let input = {
      username: username,
      email: email,
      salesTaxRate: salesTaxRate,
      password: password
    };
    postNewUser(input);
  };

  const setFormErrorHelper = () => {
    if (formError) {
      return (
        <Message
          error
          header={formError + " Error"}
          content={"Please try again"}
        />
      );
    }
  };

  const setFormSuccessHelper = formSuccess => {
    if (formSuccess) {
      return true;
    } else {
      return null;
    }
  };

  useEffect(() => setisVisible(true), []);

  return (
    <SignUpPose pose={isVisible ? "visible" : "hidden"}>
      <br />
      <Form
        widths={"equal"}
        onSubmit={event => handleSubmit(event)}
        error={formError ? true : false}
        success={formSuccess ? true : false}
      >
        <Form.Field required>
          <label>Username</label>
          <input
            name="username"
            required={true}
            placeholder={"Enter Username"}
            onChange={event => handleChangeUsername(event)}
          />
        </Form.Field>
        <Form.Field required>
          <label>Email</label>
          <input
            onChange={event => handleChangeEmail(event)}
            name="email"
            type={"email"}
            placeholder={"Enter Email"}
          />
        </Form.Field>
        <Popup
          content={
            "Example: If your sales tax rate is 7% , then please enter 0.07 here."
          }
          trigger={
            <Form.Field required>
              <label>Sales Tax Rate</label>
              <input
                name={"sales_tax_rate"}
                type={"number"}
                step={"0.01"}
                min={0}
                placeholder={"Enter Sales Tax Rate as a decimal"}
                onChange={event => handleChangeSalesTaxRate(event)}
              />
            </Form.Field>
          }
        />
        <Popup
          content={
            "Password must be at least 9 characters long and include numbers and letters"
          }
          trigger={
            <Form.Field required>
              <label>Password</label>
              <input
                type={"password"}
                placeholder={"Enter Password"}
                name={"password"}
                onChange={event => handleChangePassword(event)}
              />
            </Form.Field>
          }
        />
        <Form.Checkbox
          required
          label="Agree to terms and conditions?"
          onChange={(event, data) => handleChangeAgreeToTerms(data.checked)}
        />
        <Button
          type={"submit"}
          disabled={
            !username || !password || !salesTaxRate || !email || !agreeToTerms
          }
        >
          Submit!
        </Button>
        {setFormErrorHelper()}
      </Form>
    </SignUpPose>
  );
};

export default SignUpForm;
