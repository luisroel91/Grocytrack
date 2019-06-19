import React from "react";
import posed from "react-pose";
import SplitText from "react-pose-text";
import Switch from "react-switch";

const OptionsPose = posed.div({
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

class OptionsForm extends React.Component {
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
      <div>
        <div>
          <OptionsPose pose={this.state.isVisible ? "visible" : "hidden"}>
            <br />
            <label>
              <Switch
                onChange={() => console.log("button press")}
                checked={() => console.log("checked")}
              />
              <span>Go to lists on startup</span>
            </label>
            <br />
            <label>
              <Switch
                onChange={() => console.log("button press")}
                checked={() => console.log("checked")}
              />
              <span>Create new list on startup</span>
            </label>
            <form id="options_form" onSubmit={"dispatch action here"} />
          </OptionsPose>
        </div>
        <br />
        <div>
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            To change your username or password,
          </SplitText>
          <br />
          <SplitText
            wordPoses={wordPoses}
            pose={this.state.isVisible ? "visible" : "hidden"}
          >
            please enter your current password
          </SplitText>
        </div>
        <div>
          <OptionsPose pose={this.state.isVisible ? "visible" : "hidden"}>
            <form id="userinfo_change_form" onSubmit={"dispatch action here"}>
              <input
                type="text"
                maxLength="20"
                placeholder="Current Password"
                name="currentpassword"
              />
              <br />
              <input
                type="text"
                placeholder="New Password"
                name="newpassword"
              />
              <br />
              <SplitText
                wordPoses={wordPoses}
                pose={this.state.isVisible ? "visible" : "hidden"}
              >
                and/or
              </SplitText>
              <br />
              <input
                type="text"
                placeholder="New Username"
                name="newusername"
              />
            </form>
            <button type="submit" form="userinfo_change_form">
              Submit
            </button>
          </OptionsPose>
        </div>
      </div>
    );
  }
}

export default OptionsForm;
