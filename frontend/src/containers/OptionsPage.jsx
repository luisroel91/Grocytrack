import React from "react";

import HeaderLogo from "../components/HeaderLogo";
import OptionsForm from "../components/OptionsForm";

class OptionsPage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <OptionsForm />
        </div>
      </div>
    );
  }
}

export default OptionsPage;
