import React, { useState, useEffect } from "react";
import posed from "react-pose";
import { Form, Message } from "semantic-ui-react";
import { useStoreActions, useStoreState } from "easy-peasy";

const LoginPose = posed.div({
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

const LoginForm = () => {
  const [isVisible, setisVisible] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [saveUsername, setSaveUsername] = useState("");

  const [savedUsername, setSavedUsername] = useState("");
  const [savedCheckboxState, setSavedCheckboxState] = useState("");

  const fetchToken = useStoreActions(actions => actions.auth.fetchToken);
  const authError = useStoreState(state => state.auth.authError);

  const handleSubmit = event => {
    event.preventDefault();
    // Assemble Object
    let input = {
      username: username,
      password: password,
      saveUsername: saveUsername
    };
    // Send to our action
    fetchToken(input);
  };

  const handleChangeUsername = event => {
    setUsername(event.target.value);
  };

  const handleChangePassword = event => {
    setPassword(event.target.value);
  };

  const handleChangeRememberUsername = checkedState => {
    console.log(checkedState);
    setSaveUsername(checkedState);
  };

  const readSavedUsernameHelper = () => {
    let saved_data = localStorage.getItem("saved_username");

    if (saved_data) {
      setSavedUsername(saved_data);
      setUsername(saved_data);
    } else {
    }
  };

  const readSavedCheckboxStateHelper = () => {
    if (localStorage.getItem("saved_username")) {
      setSavedCheckboxState(true);
    } else {
      setSavedCheckboxState(false);
    }
  };

  const setAuthErrorHelper = () => {
    if (authError === 400) {
      return (
        <Message
          error
          header={"Incorrect Username or Password"}
          content={"Try again please!"}
        />
      );
    } else if (authError === 500) {
      return (
        <Message
          error
          header={"Internal Server Error"}
          content={"Wait a few minutes and try again please!"}
        />
      );
    } else {
      return null;
    }
  };

  useEffect(() => readSavedUsernameHelper(), []);

  useEffect(() => setisVisible(true), []);

  useEffect(() => readSavedCheckboxStateHelper(), []);

  return (
    <LoginPose pose={isVisible ? "visible" : "hidden"}>
      <Form
        widths={"equal"}
        error={authError ? true : false}
        onSubmit={event => handleSubmit(event)}
      >
        <Form.Field required>
          <label>Username</label>
          <input
            name={"username"}
            required={true}
            placeholder={"Enter Username"}
            defaultValue={savedUsername}
            onChange={event => handleChangeUsername(event)}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <input
            type={"password"}
            placeholder={"Enter Password"}
            name={"password"}
            onChange={event => handleChangePassword(event)}
          />
        </Form.Field>
        <Form.Checkbox
          onChange={(event, data) => handleChangeRememberUsername(data.checked)}
          label={"Remember Username?"}
          defaultValue={savedCheckboxState}
        />
        <Form.Button disabled={!username || !password}>Submit</Form.Button>
      </Form>
      {setAuthErrorHelper()}
    </LoginPose>
  );
};

export default LoginForm;
