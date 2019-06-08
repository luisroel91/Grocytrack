import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Page extends React.Component {
  render() {
    return (
      <div>
        {this.props.currentText}
        {this.props.children}
      </div>
    );
  }
}

export default Page;
